package com.balabama.mt.dtos.room.charade;

import com.balabama.mt.dtos.room.RoomDataDto;
import com.balabama.mt.entities.rooms.Room;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class RoomCharadeDataDto extends RoomDataDto {

    private Boolean allUsersReady = false;

    public RoomCharadeDataDto(Room room) {
        super();
    }
}