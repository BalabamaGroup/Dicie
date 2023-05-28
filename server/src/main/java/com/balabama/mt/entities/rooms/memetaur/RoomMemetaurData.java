package com.balabama.mt.entities.rooms.memetaur;

import com.balabama.mt.dtos.room.memetaur.RoomMemetaurDataDto;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.rooms.RoomData;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.memetaur.UserMemetaurState;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "room_memetaur_data")
@Data
@NoArgsConstructor
public class RoomMemetaurData extends RoomData {

    private Boolean allUsersReady = false;
    private String phrase;

    public RoomMemetaurData(Room room) {
        super(room);
    }

    public void allUsersSetGif() {
        this.allUsersReady = super.getRoom().getUsers().stream().map(x -> (UserMemetaurState) x.getUserState())
            .noneMatch(userMemetaurState -> userMemetaurState.getGif().isBlank());
    }

//    public boolean checkFinish() {
//        return super.getRoom().getUsers().stream().map(x -> (UserMemetaurState) x.getUserState()).allMatch(UserMemetaurState::isFinished);
//    }

    public void disconnect(User user) {
//        UserCharadeState userState = (UserCharadeState) user.getUserState();
//        userState.setWinRound(getRound());
//        if (!allUsersReady) {
//            getRoom().getUsers().stream().map(x -> (UserCharadeState) x.getUserState()).forEach(UserCharadeState::undoReady);
//            getRoom().getUsers().stream().filter(x -> !x.equals(user)).findFirst()
//                .ifPresent(y -> ((UserCharadeState) y.getUserState()).setIsGoing(true));
//            return;
//        }
//        if (userState.getIsGoing()) {
//            responseCounterYes = 0;
//            currentQuestion = null;
//            getRoom().getUsers().stream().map(x -> (UserCharadeState) x.getUserState()).forEach(y -> y.setLastAnswer(null));
//            if (!checkFinish()) {
//                changeTurn();
//            }
//        }
    }

//    private Integer findCurrentTurnNumber(Room room) {
//        for (int i = 0; i < room.getUsers().size(); i++) {
//            if (((UserMemetaurState) room.getUsers().get(i).getUserState()).getIsGoing()) {
//                return i;
//            }
//        }
//        throw new MTException(HttpStatus.INTERNAL_SERVER_ERROR, "Turn not found");
//    }

    public RoomMemetaurDataDto createDto() {
        RoomMemetaurDataDto roomCharadeDataDto = new RoomMemetaurDataDto(super.getRoom());
        roomCharadeDataDto.setAllUsersReady(allUsersReady);
        roomCharadeDataDto.setPhrase(phrase);
        return roomCharadeDataDto;
    }

//    public List<User> getUsersInPlaces() {
//        return getRoom().getUsers().stream().map(x -> (UserMemetaurState) x.getUserState())
//            .sorted(Comparator.comparing(UserMemetaurState::getWinRound).thenComparing(UserMemetaurState::questionCount))
//            .map(UserState::getUser).collect(Collectors.toList());
//    }

}