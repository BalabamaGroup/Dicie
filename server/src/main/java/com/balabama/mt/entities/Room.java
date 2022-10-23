package com.balabama.mt.entities;

import com.balabama.mt.exceptions.MTException;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer minUsers;
    private Integer maxUsers;

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

}