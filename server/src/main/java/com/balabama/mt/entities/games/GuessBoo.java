package com.balabama.mt.entities.games;

import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.guessBoo.UserGuessBooState;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.rooms.guessBoo.RoomGuessBooData;
import java.util.List;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("GUESSBOO")
public class GuessBoo extends Game {

    @Override
    public RoomGuessBooData createRoomData(Room room) {
        return new RoomGuessBooData(room);
    }

    @Override
    public List<User> addUserStates(List<User> users){
        return UserGuessBooState.addUserStates(users);
    }
}
