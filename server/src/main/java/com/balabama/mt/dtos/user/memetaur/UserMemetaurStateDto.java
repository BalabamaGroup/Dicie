package com.balabama.mt.dtos.user.memetaur;

import com.balabama.mt.dtos.user.UserStateDto;
import com.balabama.mt.entities.user.memetaur.UserMemetaurState;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserMemetaurStateDto extends UserStateDto {

    private String gif;
    private String votedGif;
    private Integer countWin;
    private Boolean isGoing = false;

    public UserMemetaurStateDto(UserMemetaurState state) {
        super(state);
        this.gif = state.getGif();
        this.votedGif = state.getGif();
        this.countWin = state.getCountWin();
        this.isGoing = state.getIsGoing();
    }

    @JsonIgnore
    public UserMemetaurStateDto hideState() {
        return this;
    }

    @JsonIgnore
    public UserMemetaurStateDto copy() {
        return new UserMemetaurStateDto(gif, votedGif, countWin, isGoing);
    }
}
