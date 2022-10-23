package com.balabama.mt.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Table(name = "room_data")
@Data
@NoArgsConstructor
public class RoomData {

    @Id
    @Column(name = "room_id")
    private Long id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "room_id")
    private Room room;

}