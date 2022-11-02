package com.balabama.mt.entities.user.charade;

import com.balabama.mt.dtos.user.charade.UserCharadeStateDto;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.UserState;
import com.balabama.mt.exceptions.MTException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@Entity
@Table(name = "user_charade_state")
@NoArgsConstructor
@Data
public class UserCharadeState extends UserState {

    private String word;
    @Column(nullable = false)
    private Boolean isFinished = false;
    @Column(nullable = false)
    private Boolean ready = false;
    @OneToOne(fetch = FetchType.LAZY)
    private UserCharadeState selectedUser;
    @OneToOne(mappedBy = "selectedUser")
    private UserCharadeState selectedBy;
    @Column(nullable = false)
    private Boolean isGoing = false;

    public UserCharadeState(User user) {
        super(user);
    }

    @Override
    public UserCharadeStateDto createDto() {
        return new UserCharadeStateDto(this);
    }

    public UserCharadeState setWord(String word) {
        this.word = word;
        return this;
    }

    public UserCharadeState checkWord(String word) {
        if (Objects.equals(this.word, word)) {
            this.isFinished = true;
        }
        return this;
    }

    public UserCharadeState addSelectedUser(User user) {
        checkTurn();
        setSelectedUser((UserCharadeState) user.getUserState());
        return this;
    }

    public void checkTurn() {
        if (!isGoing) {
            throw new MTException(HttpStatus.BAD_REQUEST, "It's not your turn now");
        }
    }

    public UserCharadeState addSelectedBy(User user) {
        setSelectedBy((UserCharadeState) user.getUserState());
        return this;
    }

    public static List<User> addUserStates(List<User> users) {
        List<User> userList = new ArrayList<>();
        for (User user : users) {
            user.setUserState(new UserCharadeState(user));
            userList.add(user);
        }
        ((UserCharadeState) userList.get(0).getUserState()).setIsGoing(true);
        return userList;
    }


}