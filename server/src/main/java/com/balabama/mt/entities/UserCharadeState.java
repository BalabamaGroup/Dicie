package com.balabama.mt.entities;

import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_charade_state")
@NoArgsConstructor
public class UserCharadeState extends UserState {

    private String word;
    private Boolean isFinished = false;

}