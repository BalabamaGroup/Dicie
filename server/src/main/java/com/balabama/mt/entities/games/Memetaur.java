package com.balabama.mt.entities.games;

import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.rooms.memetaur.RoomMemetaurData;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.memetaur.UserMemetaurState;

import java.util.List;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("MEMETAUR")
public class Memetaur extends Game {

    @Override
    public RoomMemetaurData createRoomData(Room room) {
        return new RoomMemetaurData(room);
    }

    @Override
    public List<User> addUserStates(List<User> users){
        return UserMemetaurState.addUserStates(users);
    }
}
