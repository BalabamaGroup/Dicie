package com.balabama.mt.service_implementation;

import com.balabama.mt.entities.user.guessBoo.GuessBooAnswer;
import com.balabama.mt.entities.games.GuessBoo;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.rooms.guessBoo.RoomGuessBooData;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.guessBoo.GuessBooLog;
import com.balabama.mt.entities.user.guessBoo.UserGuessBooState;
import com.balabama.mt.exceptions.MTException;
import com.balabama.mt.repositories.GuessBooLogRepository;
import com.balabama.mt.services.GameGuessBooService;
import com.balabama.mt.services.RoomService;
import com.balabama.mt.services.UserService;
import com.balabama.mt.services.UserStateService;

import java.util.List;
import java.util.Objects;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class GameGuessBooServiceImpl implements GameGuessBooService {

    private final RoomService roomService;
    private final UserStateService userStateService;
    private final UserService userService;
    private final GuessBooLogRepository guessBooLogRepository;


    @Override
    public Room setWord(Long userId, String word) {
        User currentUser = userService.getCurrent();
        Room room = currentUser.getRoom();
        room.validateGame(GuessBoo.class);
        if (currentUser.getId().equals(userId)
                || ((UserGuessBooState) currentUser.getUserState()).getSelectedUser() == null
                || !Objects.equals(
                ((UserGuessBooState) currentUser.getUserState()).getSelectedUser(), userId)) {
            throw new MTException(HttpStatus.FORBIDDEN, "You can't set a word");
        }
        UserGuessBooState userGuessBooState = ((UserGuessBooState) userStateService.getById(userId)).setWord(word);
        return roomService.save(getRoomByState(userGuessBooState));
    }

    @Override
    public Room ready() {
        User current = userService.getCurrent();
        UserGuessBooState userGuessBooState = ((UserGuessBooState) userStateService.getById(current.getId()));
        if (userGuessBooState.getReady()) {
            userGuessBooState.setReady(false);
            Room room = getRoomByState(userGuessBooState);
            return roomService.save(room);
        }
        if (((UserGuessBooState) userService.getCurrent().getUserState()).getSelectedUser() == null) {
            throw new MTException(HttpStatus.BAD_REQUEST, "Choose to whom you will make a word");
        }
        String selectedWord = (((UserGuessBooState) userService.getById(
                        ((UserGuessBooState) current.getUserState()).getSelectedUser())
                .getUserState()).getWord());
        if (selectedWord == null || selectedWord.trim().equals("")) {
            throw new MTException(HttpStatus.BAD_REQUEST, "You didn't set the word");
        }
        userGuessBooState.setReady(true);
        Room room = getRoomByState(userGuessBooState);
        RoomGuessBooData roomGuessBooData = (RoomGuessBooData) room.getRoomData();
        roomGuessBooData.checkReady();
        room.setRoomData(roomGuessBooData);
        return roomService.save(room);
    }

    @Override
    public Room checkWord(String word) {
        User current = getCurrentUserInReadyGame();
        UserGuessBooState currentUserGuessBooState = (UserGuessBooState) current.getUserState();
        currentUserGuessBooState.checkTurn();
        currentUserGuessBooState.checkWord(word);
        RoomGuessBooData roomData = (RoomGuessBooData) roomService.save(current.getRoom()).getRoomData();
        if (roomData.checkFinish()) {
            return roomService.finish(roomData.getRoom().getId());
        } else {
            return roomService.save(roomData.changeTurn());
        }
    }

    @Override
    public Room selectUser(Long userSelectedId) {
        User current = userService.getCurrent();
        User selected = userService.getById(userSelectedId);
        current.checkSameRoom(selected);
        Room room = current.getRoom();
        room.validateGame(GuessBoo.class);
        ((UserGuessBooState) current.getUserState()).selectUser((UserGuessBooState) selected.getUserState());
        return roomService.save(((RoomGuessBooData) room.getRoomData()).changeTurn());

    }

    @Override
    public Room askQuestion(String question) {
        if (question == null || question.length() < 2) {
            throw new MTException(HttpStatus.BAD_REQUEST, "Incorrect question");
        }
        User current = getCurrentUserInReadyGame();
        UserGuessBooState currentUserGuessBooState = ((UserGuessBooState) current.getUserState());
        currentUserGuessBooState.checkTurn();
        if (current.getRoom().getIsFriendMode()) {
            throw MTException.onlyForNonFriendMode();
        }
        RoomGuessBooData roomGuessBooData = (RoomGuessBooData) current.getRoom().getRoomData();
        if (roomGuessBooData.getCurrentQuestion() != null) {
            throw new MTException(HttpStatus.BAD_REQUEST, "You have already asked a question, wait for an answer");
        }
        if (roomGuessBooData.getCurrentQuestion() == null && roomGuessBooData.getResponseCounterYes() >= 3) {
            throw new MTException(HttpStatus.BAD_REQUEST, "Not your turn");
        }
        roomGuessBooData.setCurrentQuestion(question);
        current.getRoom().setRoomData(roomGuessBooData);
        return roomService.save(current.getRoom());
    }

    @Override
    public Room answer(GuessBooAnswer guessBooAnswer) {
        User current = getCurrentUserInReadyGame();
        RoomGuessBooData roomGuessBooData = (RoomGuessBooData) current.getRoom().getRoomData();
        if (current.getRoom().getIsFriendMode()) {
            throw MTException.onlyForNonFriendMode();
        }
        UserGuessBooState userState = (UserGuessBooState) current.getUserState();
        userState.canAnswer();
        if (roomGuessBooData.getCurrentQuestion() == null) {
            throw new MTException(HttpStatus.BAD_REQUEST, "The question has not been asked yet");
        }
        userState.setLastAnswer(guessBooAnswer);
        return roomService.save(roomGuessBooData.getRoom());

    }

    @Override
    public Room acceptAnswer() {
        User current = getCurrentUserInReadyGame();
        UserGuessBooState userState = (UserGuessBooState) current.getUserState();
        RoomGuessBooData roomGuessBooData = (RoomGuessBooData) current.getRoom().getRoomData();
        if (current.getRoom().getIsFriendMode()) {
            throw MTException.onlyForNonFriendMode();
        }
        List<UserGuessBooState> userGuessBooStates =
                current.getRoom().getUsers().stream().map(x -> (UserGuessBooState) x.getUserState())
                        .toList();
        long countUserAnswer = userGuessBooStates.stream()
                .filter(x -> x.getLastAnswer() != null).count();
        if (!userState.getIsGoing() || (long) current.getRoom().getUsers().size() - 1 != countUserAnswer) {
            throw new MTException(HttpStatus.BAD_REQUEST, "You can't confirm the answer now");
        }
        GuessBooAnswer endAnswer = getEndAnswer(userGuessBooStates);
        guessBooLogRepository.save(
                new GuessBooLog(roomGuessBooData.getCurrentQuestion(), endAnswer, userState));
        if (endAnswer == GuessBooAnswer.YES) {
            roomGuessBooData.setResponseCounterYes(roomGuessBooData.getResponseCounterYes() + 1);
        }
        if (endAnswer == GuessBooAnswer.NO || (roomGuessBooData.getResponseCounterYes() >= 3)) {
            roomGuessBooData.setResponseCounterYes(0);
            roomGuessBooData.changeTurn();
        }
        userGuessBooStates.forEach(x -> x.setLastAnswer(null));
        roomGuessBooData.setCurrentQuestion(null);
        return roomService.save(current.getRoom());
    }

    @Override
    public Room changeTurn() {
        User current = getCurrentUserInReadyGame();
        UserGuessBooState currentUserGuessBooState = ((UserGuessBooState) current.getUserState());
        currentUserGuessBooState.checkTurn();
        RoomGuessBooData roomData = (RoomGuessBooData) roomService.save(current.getRoom()).getRoomData();
        return roomService.save(roomData.changeTurn());
    }

    @Override
    public List<GuessBooLog> getLogs(Long id) {
        return guessBooLogRepository.findAllByState((UserGuessBooState) userService.getById(id).getUserState());
    }


    private Room getRoomByState(UserGuessBooState userGuessBooState) {
        userGuessBooState = (UserGuessBooState) userStateService.save(userGuessBooState);
        return roomService.getById(userGuessBooState.getUser().getRoom().getId());
    }

    private User getCurrentUserInReadyGame() {
        User current = userService.getCurrent();
        if (current.getRoom() == null) {
            throw new MTException(HttpStatus.BAD_REQUEST, "You are not in room");
        }
        current.getRoom().validateGame(GuessBoo.class);
        if (!((RoomGuessBooData) current.getRoom().getRoomData()).getAllUsersReady()) {
            throw new MTException(HttpStatus.BAD_REQUEST, "Not all users are ready");
        }
        return current;
    }

    private GuessBooAnswer getEndAnswer(List<UserGuessBooState> userGuessBooStates) {
        int countYes = 0;
        int countNo = 0;
        int countWTF = 0;
        for (UserGuessBooState state : userGuessBooStates) {
            if (state.getLastAnswer() == null) {
                continue;
            }
            if (state.getLastAnswer() == GuessBooAnswer.YES) {
                countYes = countYes + 1;
            } else if (state.getLastAnswer() == GuessBooAnswer.NO) {
                countNo = countNo + 1;
            } else {
                countWTF = countWTF + 1;
            }
        }
        if (countYes > countNo && countYes > countWTF) {
            return GuessBooAnswer.YES;
        } else if (countNo > countYes && countNo > countWTF) {
            return GuessBooAnswer.NO;
        } else {
            return GuessBooAnswer.WTF;
        }
    }
}
