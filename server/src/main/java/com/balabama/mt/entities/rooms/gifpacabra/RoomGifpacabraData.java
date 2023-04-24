package com.balabama.mt.entities.rooms.gifpacabra;

import com.balabama.mt.dtos.room.charade.RoomCharadeDataDto;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.rooms.RoomData;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.UserState;
import com.balabama.mt.entities.user.charade.UserCharadeState;
import com.balabama.mt.exceptions.MTException;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "room_gifpacabra_data")
@Data
@NoArgsConstructor
public class RoomGifpacabraData extends RoomData {

    private Boolean allUsersReady = false;
    private String currentQuestion;
    private Integer responseCounterYes = 0;
    private Integer round = 0;

    public RoomGifpacabraData(Room room) {
        super(room);
    }

    public void checkReady() {
        this.allUsersReady = super.getRoom().getUsers().stream().map(x -> (UserCharadeState) x.getUserState())
            .allMatch(UserCharadeState::getReady);
    }

    public boolean checkFinish() {
        return super.getRoom().getUsers().stream().map(x -> (UserCharadeState) x.getUserState()).allMatch(UserCharadeState::isFinished);
    }

    public void disconnect(User user) {
        UserCharadeState userState = (UserCharadeState) user.getUserState();
        userState.setWinRound(getRound());
        if (!allUsersReady) {
            getRoom().getUsers().stream().map(x -> (UserCharadeState) x.getUserState()).forEach(UserCharadeState::undoReady);
            getRoom().getUsers().stream().filter(x -> !x.equals(user)).findFirst()
                .ifPresent(y -> ((UserCharadeState) y.getUserState()).setIsGoing(true));
            return;
        }
        if (userState.getIsGoing()) {
            responseCounterYes = 0;
            currentQuestion = null;
            getRoom().getUsers().stream().map(x -> (UserCharadeState) x.getUserState()).forEach(y -> y.setLastAnswer(null));
            if (!checkFinish()) {
                changeTurn();
            }
        }
    }

    public Room changeTurn() {
        Integer currentTurnNumber = findCurrentTurnNumber(getRoom());
        int newNumber = 0;
        ((UserCharadeState) getRoom().getUsers().get(currentTurnNumber).getUserState()).setIsGoing(false);
        if (currentTurnNumber != getRoom().getUsers().size() - 1) {
            ((UserCharadeState) getRoom().getUsers().get(currentTurnNumber + 1).getUserState()).setIsGoing(true);
            newNumber = currentTurnNumber + 1;
        } else {
            ((UserCharadeState) getRoom().getUsers().get(0).getUserState()).setIsGoing(true);
            ((RoomGifpacabraData) getRoom().getRoomData()).setRound(((RoomGifpacabraData) getRoom().getRoomData()).getRound() + 1);
        }
        if (((UserCharadeState) getRoom().getUsers().get(newNumber).getUserState()).isFinished()) {
            changeTurn();
        }
        return getRoom();
    }

    private Integer findCurrentTurnNumber(Room room) {
        for (int i = 0; i < room.getUsers().size(); i++) {
            if (((UserCharadeState) room.getUsers().get(i).getUserState()).getIsGoing()) {
                return i;
            }
        }
        throw new MTException(HttpStatus.INTERNAL_SERVER_ERROR, "Turn not found");
    }

    public RoomCharadeDataDto createDto() {
        RoomCharadeDataDto roomCharadeDataDto = new RoomCharadeDataDto(super.getRoom());
        roomCharadeDataDto.setAllUsersReady(allUsersReady);
        roomCharadeDataDto.setCurrentQuestion(currentQuestion);
        roomCharadeDataDto.setResponseCounterYes(responseCounterYes);
        roomCharadeDataDto.setRound(round);
        return roomCharadeDataDto;
    }

    public List<User> getUsersInPlaces() {
        return getRoom().getUsers().stream().map(x -> (UserCharadeState) x.getUserState())
            .sorted(Comparator.comparing(UserCharadeState::getWinRound).thenComparing(UserCharadeState::questionCount))
            .map(UserState::getUser).collect(Collectors.toList());
    }

}