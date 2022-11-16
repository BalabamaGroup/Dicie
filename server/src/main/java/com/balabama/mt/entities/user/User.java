package com.balabama.mt.entities.user;

import com.balabama.mt.dtos.SignupRequest;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.exceptions.MTException;
import java.util.Objects;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.Type;
import org.springframework.http.HttpStatus;

@Entity
@Table(name = "user")
@Data
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String email;
    private String password;
    private UserRole role;
    @ToString.Exclude
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room", columnDefinition = "VARCHAR(36)")
    @Type(type = "uuid-char")
    private Room room;
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @PrimaryKeyJoinColumn
    private UserState userState;
    private Long points = 0L;
    @OneToOne(mappedBy = "admin")
    private Room controlledRoom;

    public User(SignupRequest signupRequest, String password) {
        this.username = signupRequest.getUsername();
        this.email = signupRequest.getEmail();
        this.password = password;
        this.role = signupRequest.getRole();
    }

    public void checkSameRoom(User otherUser) {
        if (getRoom() == null || otherUser.getRoom() == null || getRoom().getId() != otherUser.getRoom().getId()) {
            throw new MTException(HttpStatus.BAD_REQUEST, "Users in different rooms");
        }
    }

    public void disconnect() {
        getUserState().disconnect();
    }

    public void finish() {
        if (userState != null) {
            userState.finish();
        }
    }

    public void addPoints(Long points) {
        this.points = this.points + points;
        if (this.points < 0) {
            this.points = 0L;
        }
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        User that = (User) o;
        return id.equals(that.id) && username.equals(that.username) && email.equals(that.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, email);
    }
}