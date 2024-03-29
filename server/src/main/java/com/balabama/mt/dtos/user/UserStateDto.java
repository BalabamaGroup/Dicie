package com.balabama.mt.dtos.user;

import com.balabama.mt.entities.user.UserState;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserStateDto {

    public UserStateDto(UserState state) {

    }
    @JsonIgnore
    public UserStateDto hideState(){
        return this;
    }

    @JsonIgnore
    public UserStateDto copy(){
        return new UserStateDto();
    }
}
