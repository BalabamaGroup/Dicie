package com.balabama.mt.entities.games;

import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.UserState;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.rooms.RoomData;
import java.util.List;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "game")
@Data
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="game_type",
    discriminatorType = DiscriminatorType.STRING)
public class Game {

    @Id
    private Long id;
    private String name;
    private Integer minUsers;
    private Integer maxUsers;
    @ToString.Exclude
    @OneToMany(mappedBy = "game", fetch = FetchType.LAZY)
    private List<Room> rooms;

    public RoomData createRoomData(Room room){
        return new RoomData(room);
    }

    public UserState createUserState(User user){
        return new UserState(user);
    }
}
