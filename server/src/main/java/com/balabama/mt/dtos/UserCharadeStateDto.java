package com.balabama.mt.dtos;

import com.balabama.mt.entities.UserCharadeState;
import com.balabama.mt.entities.UserState;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserCharadeStateDto extends UserStateDto {

    private String word;
    private Boolean isFinished = false;

    public UserCharadeStateDto(UserCharadeState state) {
        super(state);
        this.word = state.getWord();
        this.isFinished = state.getIsFinished();
    }
}
