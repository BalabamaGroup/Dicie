package com.balabama.mt.entities.rooms.memetaur;

import com.balabama.mt.dtos.room.memetaur.RoomMemetaurDataDto;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.rooms.RoomData;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.memetaur.UserMemetaurState;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "room_memetaur_data")
@Data
@NoArgsConstructor
public class RoomMemetaurData extends RoomData {

    private Boolean allUsersSelectGif = false;
    private Boolean allUsersVoteGif = false;
    private Integer currentRound = 1;
    private String phrase;

    public RoomMemetaurData(Room room) {
        super(room);
    }

    public void allUsersSetGif() {
        this.allUsersSelectGif = super.getRoom().getUsers().stream().map(x -> (UserMemetaurState) x.getUserState())
                .noneMatch(userMemetaurState -> userMemetaurState.getGif().isBlank());
    }

    public void checkUsersVoteGif() {
        this.allUsersVoteGif = super.getRoom().getUsers().stream().map(x -> (UserMemetaurState) x.getUserState())
                .noneMatch(userMemetaurState -> userMemetaurState.getVotedGif().isBlank());
    }

    public List<User> getWonUser() {
        List<String> winGifs = getRoom().getUsers().stream().map(User::getUserState)
                .map(userState -> ((UserMemetaurState) userState).getVotedGif())
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()))
                .entrySet().stream()
                .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                .limit(1)
                .map(Map.Entry::getKey).toList();
        List<User> users = getUserByGifs(winGifs);
        users.stream().map(user -> ((UserMemetaurState) user.getUserState()))
                .forEach(UserMemetaurState::addWinCount);
        return users;
    }

    public List<User> getUserByGifs(List<String> winGifs) {
        return getRoom().getUsers().stream()
                .filter(user -> winGifs.contains(((UserMemetaurState) user.getUserState()).getGif())).toList();
    }

    public void endRound() {
        getRoom().getUsers().stream().map(user -> ((UserMemetaurState) user.getUserState()))
                .forEach(UserMemetaurState::endRound);
        currentRound += 1;
        phrase = null;
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
        RoomMemetaurDataDto roomMemetaurDataDto = new RoomMemetaurDataDto(super.getRoom());
        roomMemetaurDataDto.setAllUsersSelectGif(allUsersSelectGif);
        roomMemetaurDataDto.setAllUsersVoteGif(allUsersVoteGif);
        roomMemetaurDataDto.setCurrentRound(currentRound);
        roomMemetaurDataDto.setPhrase(phrase);
        return roomMemetaurDataDto;
    }

//    public List<User> getUsersInPlaces() {
//        return getRoom().getUsers().stream().map(x -> (UserMemetaurState) x.getUserState())
//            .sorted(Comparator.comparing(UserMemetaurState::getWinRound).thenComparing(UserMemetaurState::questionCount))
//            .map(UserState::getUser).collect(Collectors.toList());
//    }

}