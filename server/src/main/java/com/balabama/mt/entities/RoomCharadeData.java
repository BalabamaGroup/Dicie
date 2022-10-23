package com.balabama.mt.entities;

import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "room_data")
@Data
@NoArgsConstructor
public class RoomCharadeData extends Room{

    private Long userTurnId;
    private boolean isFinished = false;
}