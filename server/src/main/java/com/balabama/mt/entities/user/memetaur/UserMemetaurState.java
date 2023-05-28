package com.balabama.mt.entities.user.memetaur;

import com.balabama.mt.dtos.user.memetaur.UserMemetaurStateDto;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.UserState;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "user_memetaur_state")
@NoArgsConstructor
@Data
public class UserMemetaurState extends UserState {

    private String gif;
    private String votedGif;
    private Integer countWin = 0;

    public UserMemetaurState(User user) {
        super(user);
    }

    @Override
    public UserMemetaurStateDto createDto() {
        return new UserMemetaurStateDto(this);
    }

    public void addWinCount() {
        countWin += 1;
    }

    public void endRound() {
        gif = null;
        votedGif = null;
    }

    public void checkTurn() {
//        if (!isGoing) {
//            throw new MTException(HttpStatus.BAD_REQUEST, "It's not your turn now");
//        }
    }

    public static List<User> addUserStates(List<User> users) {
        List<User> userList = new ArrayList<>();
        for (User user : users) {
            user.setUserState(new UserMemetaurState(user));
            userList.add(user);
        }
        return userList;
    }

    public void disconnect() {

    }


}