package com.balabama.mt.dtos.room;

import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.rooms.RoomData;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class RoomDataDto {

    public RoomDataDto(Room room) {
    }

}