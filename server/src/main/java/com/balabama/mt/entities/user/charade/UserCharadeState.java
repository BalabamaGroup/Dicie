package com.balabama.mt.entities.user.charade;

import com.balabama.mt.dtos.user.charade.UserCharadeStateDto;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.UserState;
import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_charade_state")
@NoArgsConstructor
@Data
public class UserCharadeState extends UserState {

    private String word;
    private Boolean isFinished = false;
    private Boolean ready = false;
    private Long selectedUser;

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


}