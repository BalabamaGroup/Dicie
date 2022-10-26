package com.balabama.mt.dtos.user;

import com.balabama.mt.entities.user.UserRole;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserDto {

    private Long id;
    private String username;
    private String email;
    private UserRole role;
    private Long roomId;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class UserWithState extends UserDto {

        private UserStateDto state;

    }
}
