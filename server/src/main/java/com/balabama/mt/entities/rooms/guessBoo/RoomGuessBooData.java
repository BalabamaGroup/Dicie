package com.balabama.mt.entities.rooms.guessBoo;

import com.balabama.mt.dtos.room.guessBoo.RoomGuessBooDataDto;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.rooms.RoomData;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.UserState;
import com.balabama.mt.entities.user.guessBoo.UserGuessBooState;
import com.balabama.mt.exceptions.MTException;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@Entity
@Table(name = "room_guess_boo_data")
@Data
@NoArgsConstructor
public class RoomGuessBooData extends RoomData {

    private Boolean allUsersReady = false;
    private String currentQuestion;
    private Integer responseCounterYes = 0;
    private Integer round = 0;

    public RoomGuessBooData(Room room) {
        super(room);
    }

    public void checkReady() {
        this.allUsersReady = super.getRoom().getUsers().stream().map(x -> (UserGuessBooState) x.getUserState())
            .allMatch(UserGuessBooState::getReady);
    }

    public boolean checkFinish() {
        return super.getRoom().getUsers().stream().map(x -> (UserGuessBooState) x.getUserState()).allMatch(UserGuessBooState::isFinished);
    }

    public void disconnect(User user) {
        UserGuessBooState userState = (UserGuessBooState) user.getUserState();
        userState.setWinRound(getRound());
        if (!allUsersReady) {
            getRoom().getUsers().stream().map(x -> (UserGuessBooState) x.getUserState()).forEach(UserGuessBooState::undoReady);
            getRoom().getUsers().stream().filter(x -> !x.equals(user)).findFirst()
                .ifPresent(y -> ((UserGuessBooState) y.getUserState()).setIsGoing(true));
            return;
        }
        if (userState.getIsGoing()) {
            responseCounterYes = 0;
            currentQuestion = null;
            getRoom().getUsers().stream().map(x -> (UserGuessBooState) x.getUserState()).forEach(y -> y.setLastAnswer(null));
            if (!checkFinish()) {
                changeTurn();
            }
        }
    }

    public Room changeTurn() {
        Integer currentTurnNumber = findCurrentTurnNumber(getRoom());
        int newNumber = 0;
        ((UserGuessBooState) getRoom().getUsers().get(currentTurnNumber).getUserState()).setIsGoing(false);
        if (currentTurnNumber != getRoom().getUsers().size() - 1) {
            ((UserGuessBooState) getRoom().getUsers().get(currentTurnNumber + 1).getUserState()).setIsGoing(true);
            newNumber = currentTurnNumber + 1;
        } else {
            ((UserGuessBooState) getRoom().getUsers().get(0).getUserState()).setIsGoing(true);
            ((RoomGuessBooData) getRoom().getRoomData()).setRound(((RoomGuessBooData) getRoom().getRoomData()).getRound() + 1);
        }
        if (((UserGuessBooState) getRoom().getUsers().get(newNumber).getUserState()).isFinished()) {
            changeTurn();
        }
        return getRoom();
    }

    private Integer findCurrentTurnNumber(Room room) {
        for (int i = 0; i < room.getUsers().size(); i++) {
            if (((UserGuessBooState) room.getUsers().get(i).getUserState()).getIsGoing()) {
                return i;
            }
        }
        throw new MTException(HttpStatus.INTERNAL_SERVER_ERROR, "Turn not found");
    }

    public RoomGuessBooDataDto createDto() {
        RoomGuessBooDataDto roomGuessBooDataDto = new RoomGuessBooDataDto(super.getRoom());
        roomGuessBooDataDto.setAllUsersReady(allUsersReady);
        roomGuessBooDataDto.setCurrentQuestion(currentQuestion);
        roomGuessBooDataDto.setResponseCounterYes(responseCounterYes);
        roomGuessBooDataDto.setRound(round);
        return roomGuessBooDataDto;
    }

    public List<User> getUsersInPlaces() {
        return getRoom().getUsers().stream().map(x -> (UserGuessBooState) x.getUserState())
            .sorted(Comparator.comparing(UserGuessBooState::getWinRound).thenComparing(UserGuessBooState::questionCount))
            .map(UserState::getUser).collect(Collectors.toList());
    }

}