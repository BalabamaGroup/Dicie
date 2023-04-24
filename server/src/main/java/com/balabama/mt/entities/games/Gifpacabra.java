package com.balabama.mt.entities.games;

import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.rooms.charade.RoomCharadeData;
import com.balabama.mt.entities.rooms.gifpacabra.RoomGifpacabraData;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.charade.UserCharadeState;

import java.util.List;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("GIFPACABRA")
public class Gifpacabra extends Game {

    @Override
    public RoomGifpacabraData createRoomData(Room room) {
        return new RoomGifpacabraData(room);
    }

    @Override
    public List<User> addUserStates(List<User> users){
        return UserCharadeState.addUserStates(users);
    }
}
