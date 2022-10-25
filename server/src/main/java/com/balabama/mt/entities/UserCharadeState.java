package com.balabama.mt.entities;

import com.balabama.mt.dtos.UserCharadeStateDto;
import com.balabama.mt.dtos.UserStateDto;
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

    public UserCharadeState(User user) {
        super(user);
    }

    @Override
    public UserCharadeStateDto createDto() {
        return new UserCharadeStateDto(this);
    }

}