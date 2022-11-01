package com.balabama.mt.entities.games;

import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.UserState;
import com.balabama.mt.entities.user.charade.UserCharadeState;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.rooms.charade.RoomCharadeData;
import java.util.List;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("CHARADE")
public class Charade extends Game {

    @Override
    public RoomCharadeData createRoomData(Room room) {
        return new RoomCharadeData(room);
    }

    @Override
    public List<User> addUserStates(List<User> users){
        return UserCharadeState.addUserStates(users);
    }
}
