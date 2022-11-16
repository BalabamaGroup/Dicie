package com.balabama.mt.entities.rooms;

import com.balabama.mt.dtos.room.RoomDataDto;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.charade.UserCharadeState;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
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
import org.hibernate.annotations.Type;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Table(name = "room_data")
@Data
@NoArgsConstructor
public class RoomData {

    @Id
    @Column(name = "room_id", columnDefinition = "VARCHAR(36)")
    @Type(type = "uuid-char")
    private UUID id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "room_id")
    private Room room;

    public RoomData(Room room) {
        this.id = room.getId();
        this.room = room;
    }

    public RoomDataDto createDto() {
        return new RoomDataDto(this.room);
    }

    public boolean checkFinish() {
        return true;
    }

    public void disconnect(User user) {
        return;
    }

    public List<User> getUsersInPlaces() {
        return new ArrayList<>();
    }

    public void earnPoints() {
        List<User> usersInPlaces = getUsersInPlaces();
        long roomAvg = (long) (((float) usersInPlaces.stream().mapToLong(User::getPoints).sum()) / usersInPlaces.size());
        long countWin = usersInPlaces.size() / 2;
        long countLose = usersInPlaces.size() - countWin;
        for (int userNum = 0; userNum < usersInPlaces.size(); userNum++) {
            if (userNum >= countWin) {
                long points = (long) Math.ceil(((100f / countLose) * (countLose - (usersInPlaces.size() - userNum - 1))));
                usersInPlaces.get(userNum)
                    .addPoints(points * (-(1 / (1 + 10 ^ ((roomAvg - usersInPlaces.get(userNum).getPoints()) / 400)))));
            } else {
                long points = (long) Math.ceil(((100f / countWin) * (countWin - userNum)));
                usersInPlaces.get(userNum)
                    .addPoints(points * (1 - 1 / (1 + 10 ^ ((roomAvg - usersInPlaces.get(userNum).getPoints()) / 400))));
            }
        }
    }

}