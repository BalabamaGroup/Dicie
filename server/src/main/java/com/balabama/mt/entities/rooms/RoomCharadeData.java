package com.balabama.mt.entities.rooms;

import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "room_charade_data")
@Data
@NoArgsConstructor
public class RoomCharadeData extends RoomData {

    public RoomCharadeData(Room room) {
        super(room);
    }
}