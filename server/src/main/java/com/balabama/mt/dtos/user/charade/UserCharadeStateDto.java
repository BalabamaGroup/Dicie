package com.balabama.mt.dtos.user.charade;

import com.balabama.mt.dtos.user.UserStateDto;
import com.balabama.mt.entities.user.charade.UserCharadeState;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserCharadeStateDto extends UserStateDto {

    private String word;
    private Boolean isFinished = false;
    private Boolean ready = false;
    public UserCharadeStateDto(UserCharadeState state) {
        super(state);
        this.word = state.getWord();
        this.isFinished = state.getIsFinished();
        this.ready = state.getReady();
    }
    @JsonIgnore
    public void hideState(){
        word = "*****";
    }
}
