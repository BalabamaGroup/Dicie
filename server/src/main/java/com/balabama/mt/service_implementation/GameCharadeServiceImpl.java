package com.balabama.mt.service_implementation;

import com.balabama.mt.entities.user.charade.CharadeAnswer;
import com.balabama.mt.entities.games.Charade;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.rooms.charade.RoomCharadeData;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.charade.CharadeLog;
import com.balabama.mt.entities.user.charade.UserCharadeState;
import com.balabama.mt.exceptions.MTException;
import com.balabama.mt.repositories.CharadeLogRepository;
import com.balabama.mt.services.GameCharadeService;
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
public class GameCharadeServiceImpl implements GameCharadeService {

    private final RoomService roomService;
    private final UserStateService userStateService;
    private final UserService userService;
    private final CharadeLogRepository charadeLogRepository;


    @Override
    public Room setWord(Long userId, String word) {
        User currentUser = userService.getCurrent();
        Room room = currentUser.getRoom();
        room.validateGame(Charade.class);
        if (currentUser.getId().equals(userId) || ((UserCharadeState) currentUser.getUserState()).getSelectedUser() == null
            || !Objects.equals(
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
    public Room checkWord(String word) {
        User current = getCurrentUserInReadyGame();
        UserCharadeState currentUserCharadeState = (UserCharadeState) current.getUserState();
        currentUserCharadeState.checkTurn();
        currentUserCharadeState.checkWord(word);
        RoomCharadeData roomCharadeData = (RoomCharadeData) roomService.save(current.getRoom()).getRoomData();
        if (roomCharadeData.checkFinish()) {
            return roomService.finish(roomCharadeData.getRoom().getId());
        } else {
            return roomService.save(changeTurn(roomCharadeData.getRoom()));
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
    public Room askQuestion(String question) {
        if (question == null || question.length() < 2) {
            throw new MTException(HttpStatus.BAD_REQUEST, "Incorrect question");
        }
        User current = getCurrentUserInReadyGame();
        UserCharadeState currentUserCharadeState = ((UserCharadeState) current.getUserState());
        currentUserCharadeState.checkTurn();
        RoomCharadeData roomCharadeData = (RoomCharadeData) current.getRoom().getRoomData();
        if (roomCharadeData.getCurrentQuestion() != null) {
            throw new MTException(HttpStatus.BAD_REQUEST, "You have already asked a question, wait for an answer");
        }
        if (roomCharadeData.getCurrentQuestion() == null && roomCharadeData.getResponseCounterYes() >= 3) {
            throw new MTException(HttpStatus.BAD_REQUEST, "Not your turn");
        }
        roomCharadeData.setCurrentQuestion(question);
        current.getRoom().setRoomData(roomCharadeData);
        return roomService.save(current.getRoom());
    }

    @Override
    public Room answer(CharadeAnswer charadeAnswer) {
        User current = getCurrentUserInReadyGame();
        RoomCharadeData roomCharadeData = (RoomCharadeData) current.getRoom().getRoomData();
        UserCharadeState userState = (UserCharadeState) current.getUserState();
        userState.canAnswer();
        if (roomCharadeData.getCurrentQuestion() == null) {
            throw new MTException(HttpStatus.BAD_REQUEST, "The question has not been asked yet");
        }
        userState.setLastAnswer(charadeAnswer);
        return roomService.save(roomCharadeData.getRoom());

    }

    @Override
    public Room acceptAnswer() {
        User current = getCurrentUserInReadyGame();
        UserCharadeState userState = (UserCharadeState) current.getUserState();
        RoomCharadeData roomCharadeData = (RoomCharadeData) current.getRoom().getRoomData();
        List<UserCharadeState> userCharadeStates = current.getRoom().getUsers().stream().map(x -> (UserCharadeState) x.getUserState())
            .toList();
        long countUserAnswer = userCharadeStates.stream()
            .filter(x -> x.getLastAnswer() != null).count();
        if (!userState.getIsGoing() || (long) current.getRoom().getUsers().size() - 1 != countUserAnswer) {
            throw new MTException(HttpStatus.BAD_REQUEST, "You can't confirm the answer now");
        }
        CharadeAnswer endAnswer = getEndAnswer(userCharadeStates);
        charadeLogRepository.save(
            new CharadeLog(roomCharadeData.getCurrentQuestion(), endAnswer, userState));
        if (endAnswer == CharadeAnswer.YES) {
            roomCharadeData.setResponseCounterYes(roomCharadeData.getResponseCounterYes() + 1);
        }
        if (endAnswer == CharadeAnswer.NO || (roomCharadeData.getResponseCounterYes() >= 3)) {
            roomCharadeData.setResponseCounterYes(0);
            changeTurn(roomCharadeData.getRoom());
        }
        userCharadeStates.forEach(x -> x.setLastAnswer(null));
        roomCharadeData.setCurrentQuestion(null);
        return roomService.save(current.getRoom());
    }

    @Override
    public List<CharadeLog> getLogs(Long id) {
        return charadeLogRepository.findAllByState((UserCharadeState) userService.getById(id).getUserState());
    }


    private Room getRoomByState(UserCharadeState userCharadeState) {
        userCharadeState = (UserCharadeState) userStateService.save(userCharadeState);
        return roomService.getById(userCharadeState.getUser().getRoom().getId());
    }

    private Room changeTurn(Room room) {
        Integer currentTurnNumber = findCurrentTurnNumber(room);
        int newNumber = 0;
        ((UserCharadeState) room.getUsers().get(currentTurnNumber).getUserState()).setIsGoing(false);
        if (currentTurnNumber != room.getUsers().size() - 1) {
            ((UserCharadeState) room.getUsers().get(currentTurnNumber + 1).getUserState()).setIsGoing(true);
            newNumber = currentTurnNumber + 1;
        } else {
            ((UserCharadeState) room.getUsers().get(0).getUserState()).setIsGoing(true);
            ((RoomCharadeData) room.getRoomData()).setRound(((RoomCharadeData) room.getRoomData()).getRound() + 1);
        }
        if (((UserCharadeState) room.getUsers().get(newNumber).getUserState()).isFinished()) {
            changeTurn(room);
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

    private User getCurrentUserInReadyGame() {
        User current = userService.getCurrent();
        if (current.getRoom() == null) {
            throw new MTException(HttpStatus.BAD_REQUEST, "You are not in room");
        }
        current.getRoom().validateGame(Charade.class);
        if (!((RoomCharadeData) current.getRoom().getRoomData()).getAllUsersReady()) {
            throw new MTException(HttpStatus.BAD_REQUEST, "Not all users are ready");
        }
        return current;
    }

    private CharadeAnswer getEndAnswer(List<UserCharadeState> userCharadeStates) {
        int countYes = 0;
        int countNo = 0;
        int countWTF = 0;
        for (UserCharadeState state : userCharadeStates) {
            if (state.getLastAnswer() == CharadeAnswer.YES) {
                countYes = countYes + 1;
            } else if (state.getLastAnswer() == CharadeAnswer.NO) {
                countNo = countNo + 1;
            } else {
                countWTF = countWTF + 1;
            }
        }
        if (countYes > countNo && countYes > countWTF) {
            return CharadeAnswer.YES;
        } else if (countNo > countYes && countNo > countWTF) {
            return CharadeAnswer.NO;
        } else {
            return CharadeAnswer.WTF;
        }
    }
}
