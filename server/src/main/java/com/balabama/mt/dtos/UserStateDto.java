package com.balabama.mt.dtos;

import com.balabama.mt.entities.UserState;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserStateDto {

    public UserStateDto(UserState state) {

    }
}
