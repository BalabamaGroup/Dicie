package com.balabama.mt.service_implementation;

import com.balabama.mt.dtos.room.charade.CharadeAnswer;
import com.balabama.mt.entities.games.Charade;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.rooms.charade.RoomCharadeData;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.charade.UserCharadeState;
import com.balabama.mt.exceptions.MTException;
import com.balabama.mt.services.GameCharadeService;
import com.balabama.mt.services.RoomService;
import com.balabama.mt.services.UserService;
import com.balabama.mt.services.UserStateService;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class GameCharadeServiceImpl implements GameCharadeService {

    private final RoomService roomService;
    private final UserStateService userStateService;
    private final UserService userService;


    @Override
    public Room setWord(Long userId, String word) {
        User currentUser = userService.getCurrent();
        Room room = currentUser.getRoom();
        room.validateGame(Charade.class);
        if (currentUser.getId().equals(userId) || ((UserCharadeState) currentUser.getUserState()).getSelectedUser() == null || !Objects.equals(
            ((UserCharadeState) currentUser.getUserState()).getSelectedUser().getId(), userId)) {
            throw new MTException(HttpStatus.FORBIDDEN, "You can't set a word");
        }
        UserCharadeState userCharadeState = ((UserCharadeState) userStateService.getById(userId)).setWord(word);
        return roomService.save(getRoomByState(userCharadeState));
    }

    @Override
    public Room ready() {
        User current = userService.getCurrent();
        if (((UserCharadeState) userService.getCurrent().getUserState()).getSelectedUser() == null) {
            throw new MTException(HttpStatus.BAD_REQUEST, "Choose to whom you will make a word");
        }
        String selectedWord = (((UserCharadeState) userService.getById(
                ((UserCharadeState) current.getUserState()).getSelectedUser().getId())
            .getUserState()).getWord());
        if (selectedWord == null || selectedWord.equals("")) {
            throw new MTException(HttpStatus.BAD_REQUEST, "You didn't set the word");
        }
        UserCharadeState userCharadeState = ((UserCharadeState) userStateService.getById(current.getId()));
        userCharadeState.setReady(true);
        Room room = getRoomByState(userCharadeState);
        RoomCharadeData roomCharadeData = (RoomCharadeData) room.getRoomData();
        roomCharadeData.checkReady();
        room.setRoomData(roomCharadeData);
        return roomService.save(room);
    }

    @Override
    public Room askQuestion(String question) {
        User current = userService.getCurrent();
        UserCharadeState currentUserCharadeState = ((UserCharadeState) current.getUserState());
        currentUserCharadeState.checkTurn();
        RoomCharadeData roomCharadeData = (RoomCharadeData) current.getRoom().getRoomData();
        if (roomCharadeData.getCurrentQuestion() == null && roomCharadeData.getResponseCounterYes() >= 3) {
            throw new MTException(HttpStatus.BAD_REQUEST, "Not your turn");
        }
        roomCharadeData.setCurrentQuestion(question);
        current.getRoom().setRoomData(roomCharadeData);
        return roomService.save(current.getRoom());
    }


    @Override
    public Room checkWord(String word) {
        UserCharadeState userCharadeState = ((UserCharadeState) userStateService.getById(userService.getCurrent().getId())).checkWord(word);
        Room room = getRoomByState(userCharadeState);
        RoomCharadeData roomCharadeData = (RoomCharadeData) room.getRoomData();
        if (roomCharadeData.checkFinish()) {
            return roomService.finish(room.getId());
        } else {
            return roomService.save(changeTurn(room));
        }
    }

    @Override
    public Room selectUser(Long userSelectedId) {
        User current = userService.getCurrent();
        User selected = userService.getById(userSelectedId);
        current.checkSameRoom(selected);
        Room room = current.getRoom();
        room.validateGame(Charade.class);
        ((UserCharadeState) current.getUserState()).selectUser((UserCharadeState) selected.getUserState());
        return roomService.save(changeTurn(current.getRoom()));

    }

    @Override
    public Room answer(CharadeAnswer charadeAnswer) {
        User current = userService.getCurrent();
        UserCharadeState currentUserCharadeState = ((UserCharadeState) current.getUserState());
        User turnUser = userService.getById(currentUserCharadeState.getSelectedUser().getId());
        if (!((UserCharadeState) turnUser.getUserState()).getIsGoing()) {
            throw new MTException(HttpStatus.BAD_REQUEST, "You cannot answer this user's questions");
        }
        RoomCharadeData roomCharadeData = (RoomCharadeData) current.getRoom().getRoomData();
        if (roomCharadeData.getCurrentQuestion() == null && roomCharadeData.getResponseCounterYes() >= 3) {
            throw new MTException(HttpStatus.BAD_REQUEST, "Ooops smth went wrong");
        }
        roomCharadeData.setCurrentQuestion(null);
        if (charadeAnswer == CharadeAnswer.YES) {
            roomCharadeData.setResponseCounterYes(roomCharadeData.getResponseCounterYes() + 1);
        }
        if (charadeAnswer == CharadeAnswer.NO || (roomCharadeData.getResponseCounterYes() >= 3)) {
            roomCharadeData.setResponseCounterYes(0);
            changeTurn(roomCharadeData.getRoom());
        }
        return roomService.save(roomCharadeData.getRoom());

    }


    private Room getRoomByState(UserCharadeState userCharadeState) {
        userCharadeState = (UserCharadeState) userStateService.save(userCharadeState);
        return roomService.getById(userCharadeState.getUser().getRoom().getId());
    }

    private Room changeTurn(Room room) {
        Integer currentTurnNumber = findCurrentTurnNumber(room);
        ((UserCharadeState) room.getUsers().get(currentTurnNumber).getUserState()).setIsGoing(false);
        if (currentTurnNumber != room.getUsers().size() - 1) {
            ((UserCharadeState) room.getUsers().get(currentTurnNumber + 1).getUserState()).setIsGoing(true);
        } else {
            ((UserCharadeState) room.getUsers().get(0).getUserState()).setIsGoing(true);
        }
        return room;
    }

    private Integer findCurrentTurnNumber(Room room) {
        for (int i = 0; i < room.getUsers().size(); i++) {
            if (((UserCharadeState) room.getUsers().get(i).getUserState()).getIsGoing()) {
                return i;
            }
        }
        throw new MTException(HttpStatus.INTERNAL_SERVER_ERROR, "Turn not found");
    }

}
