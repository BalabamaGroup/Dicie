package com.balabama.mt.entities.user.charade;

import com.balabama.mt.dtos.user.charade.UserCharadeStateDto;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.UserState;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private Long selectedUser;
    private Long selectedBy;
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
        this.ready = true;
        return this;
    }

    public UserCharadeState checkWord(String word) {
        if (Objects.equals(this.word, word)) {
            this.isFinished = true;
        }
        return this;
    }

    public UserCharadeState addSelectedUser(User user) {
        setSelectedUser(user.getId());
        return this;
    }

    public UserCharadeState addSelectedBy(User user) {
        setSelectedBy(user.getId());
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