package com.balabama.mt.dtos.room.guessBoo;

import com.balabama.mt.dtos.room.RoomDataDto;
import com.balabama.mt.entities.rooms.Room;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class RoomGuessBooDataDto extends RoomDataDto {

    private Boolean allUsersReady = false;
    private String currentQuestion;
    private Integer responseCounterYes = 0;
    private Integer round = 0;

    public RoomGuessBooDataDto(Room room) {
        super();
    }
}