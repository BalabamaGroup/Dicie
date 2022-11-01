package com.balabama.mt.entities.rooms.charade;

import com.balabama.mt.dtos.room.charade.RoomCharadeDataDto;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.rooms.RoomData;
import com.balabama.mt.entities.user.charade.UserCharadeState;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "room_charade_data")
@Data
@NoArgsConstructor
public class RoomCharadeData extends RoomData {

    private Boolean allUsersReady = false;
    private String currentQuestion;
    private Integer responseCounterYes = 0;

    public RoomCharadeData(Room room) {
        super(room);
    }

    public void checkReady() {
        if (super.getRoom().getUsers().stream().map(x -> (UserCharadeState) x.getUserState()).allMatch(UserCharadeState::getReady)) {
            this.allUsersReady = true;
        } else {
            this.allUsersReady = false;
        }
    }

    public boolean checkFinish() {
        return super.getRoom().getUsers().stream().map(x -> (UserCharadeState) x.getUserState()).allMatch(UserCharadeState::getIsFinished);
    }

    public RoomCharadeDataDto createDto() {
        RoomCharadeDataDto roomCharadeDataDto = new RoomCharadeDataDto(super.getRoom());
        roomCharadeDataDto.setAllUsersReady(allUsersReady);
        roomCharadeDataDto.setCurrentQuestion(currentQuestion);
        roomCharadeDataDto.setResponseCounterYes(responseCounterYes);
        return roomCharadeDataDto;
    }

}