package com.balabama.mt.dtos.room.memetaur;

import com.balabama.mt.dtos.room.RoomDataDto;
import com.balabama.mt.entities.rooms.Room;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class RoomMemetaurDataDto extends RoomDataDto {

    private Boolean allUsersReady = false;
    private String phrase;;

    public RoomMemetaurDataDto(Room room) {
        super();
    }
}