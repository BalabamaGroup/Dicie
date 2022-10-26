package com.balabama.mt.entities.rooms;

import com.balabama.mt.entities.games.Game;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.exceptions.MTException;
import com.balabama.mt.exceptions.RoomStartException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.http.HttpStatus;

@Entity
@Table(name = "room")
@Data
@NoArgsConstructor
public class Room {

    @Id
    @GeneratedValue
    private UUID id;
    private String name;
    private Integer minUsers = 2;
    private Integer maxUsers = 20;
    private Boolean start = false;

    @ToString.Exclude
    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private List<User> users = new ArrayList<>();
    @ToString.Exclude
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "game")
    private Game game;
    @OneToOne(mappedBy = "room", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private RoomData roomData;

    public void addUsers(List<User> users) {
        users.forEach(this::addUser);
    }

    public void addUser(User user) {
        if (this.users.contains(user)) {
            return;
        }
        if (user.getRoom() != null || user.getUserState() != null) {
            throw new MTException(HttpStatus.BAD_REQUEST, "User " + user.getUsername() + " is already in the room");
        }
        user.setRoom(this);
        this.users.add(user);
    }

    public void connect(User user) {
        checkRoomNotStart();
        addUser(user);
    }

    public void start() {
        this.startCheck();
        this.roomData = this.game.createRoomData(this);
        List<User> userList = new ArrayList<>();
        for (User user : users) {
            user.setUserState(this.game.createUserState(user));
            userList.add(user);
        }
        this.setUsers(userList);
        this.start = true;
    }

    private void startCheck() {
        checkRoomNotStart();
        if (game == null) {
            throw RoomStartException.gameNotSet(this.id);
        }
        checkUsersLimits();
    }

    private void checkRoomNotStart() {
        if (roomData != null || start) {
            throw RoomStartException.alreadyRunning(this.id);
        }
    }

    private void checkUsersLimits() {
        if (users.size() > game.getMaxUsers()) {
            throw RoomStartException.usersLimit(this);
        }
        if (users.size() < game.getMinUsers()) {
            throw RoomStartException.usersFew(this);
        }
    }

    public Integer numberOfUsers(){
        return users.size();
    }
}