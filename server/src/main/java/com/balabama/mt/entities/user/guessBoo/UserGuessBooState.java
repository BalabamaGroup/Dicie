package com.balabama.mt.entities.user.guessBoo;

import com.balabama.mt.dtos.user.guessBoo.UserGuessBooStateDto;
import com.balabama.mt.entities.rooms.guessBoo.RoomGuessBooData;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.UserState;
import com.balabama.mt.exceptions.MTException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import liquibase.repackaged.org.apache.commons.text.similarity.LevenshteinDistance;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.http.HttpStatus;

@Entity
@Table(name = "user_guess_boo_state")
@NoArgsConstructor
@Data
public class UserGuessBooState extends UserState {

    private String word;
    private Integer winRound;
    @Column(nullable = false)
    private Boolean ready = false;
    private Long selectedUser;
    private Long selectedBy;
    @Column(nullable = false)
    private Boolean isGoing = false;
    private GuessBooAnswer lastAnswer;
    @ToString.Exclude
    @OneToMany(mappedBy = "state", fetch = FetchType.LAZY, orphanRemoval = true)
    private List<GuessBooLog> guessBooLogs = new ArrayList<>();

    public UserGuessBooState(User user) {
        super(user);
    }

    @Override
    public UserGuessBooStateDto createDto() {
        return new UserGuessBooStateDto(this);
    }

    public UserGuessBooState setWord(String word) {
        this.word = word;
        return this;
    }

    public UserGuessBooState checkWord(String word) {
        int q = new LevenshteinDistance().apply(word.toLowerCase(), this.word.toLowerCase());
        if (q < ((((float) this.word.length()) / 100) * 60)) {
            this.winRound = ((RoomGuessBooData) this.getUser().getRoom().getRoomData()).getRound();
        }
        return this;
    }

    public void selectUser(UserGuessBooState selectedUser) {
        checkTurn();
        if (Objects.equals(this.getId(), selectedUser.getId()) || getSelectedUser() != null || selectedUser.getSelectedBy() != null) {
            throw new MTException(HttpStatus.BAD_REQUEST, "You can not select this user");
        }
        setSelectedUser(selectedUser.getId());
        selectedUser.setSelectedBy(this.getId());
        checkNonCycleSelectedUser();
    }

    public void checkTurn() {
        if (!isGoing) {
            throw new MTException(HttpStatus.BAD_REQUEST, "It's not your turn now");
        }
    }

    public UserGuessBooState addSelectedBy(User user) {
        setSelectedBy(user.getId());
        return this;
    }

    public static List<User> addUserStates(List<User> users) {
        List<User> userList = new ArrayList<>();
        for (User user : users) {
            user.setUserState(new UserGuessBooState(user));
            userList.add(user);
        }
        ((UserGuessBooState) userList.get(0).getUserState()).setIsGoing(true);
        return userList;
    }

    public void disconnect() {
        selectedUser = null;
        selectedBy = null;
    }

    private void checkNonCycleSelectedUser() {
        if (getUser().getRoom().getUsers().stream().map(user -> (UserGuessBooState) user.getUserState())
            .filter(state -> state.getSelectedBy() == null && state.getSelectedUser() == null).count() == 1
            && getUser().getRoom().getUsers().stream().map(user -> (UserGuessBooState) user.getUserState())
            .filter(state -> state.getSelectedBy() != null && state.getSelectedUser() != null).count()
            == getUser().getRoom().getUsers().size() - 1) {
            throw new MTException(HttpStatus.BAD_REQUEST, "You have to choose another user");
        }
    }

    public Boolean isFinished() {
        return this.winRound != null;
    }

    public void canAnswer() {
        if (isGoing || lastAnswer != null) {
            throw new MTException(HttpStatus.BAD_REQUEST, "You can't answer your own question");
        }
    }

    public void undoReady() {
        selectedUser = null;
        selectedBy = null;
        word = null;
        ready = false;
        isGoing = false;
    }

    public int questionCount() {
        return guessBooLogs.size();
    }


}