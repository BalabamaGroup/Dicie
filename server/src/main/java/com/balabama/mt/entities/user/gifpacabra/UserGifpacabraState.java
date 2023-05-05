package com.balabama.mt.entities.user.gifpacabra;

import com.balabama.mt.dtos.user.gifpacabra.UserGifpacabraStateDto;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.UserState;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "user_gifpacabra_state")
@NoArgsConstructor
@Data
public class UserGifpacabraState extends UserState {

    private String gif;
    private String votedGif;

    public UserGifpacabraState(User user) {
        super(user);
    }

    @Override
    public UserGifpacabraStateDto createDto() {
        return new UserGifpacabraStateDto(this);
    }

    public void checkTurn() {
//        if (!isGoing) {
//            throw new MTException(HttpStatus.BAD_REQUEST, "It's not your turn now");
//        }
    }

    public static List<User> addUserStates(List<User> users) {
        List<User> userList = new ArrayList<>();
        for (User user : users) {
            user.setUserState(new UserGifpacabraState(user));
            userList.add(user);
        }
        return userList;
    }

    public void disconnect() {

    }


}