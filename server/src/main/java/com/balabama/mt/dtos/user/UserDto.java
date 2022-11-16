package com.balabama.mt.dtos.user;

import com.balabama.mt.entities.user.UserRole;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.UUID;
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
    private UUID roomId;
    private Long points;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class UserWithState extends UserDto {

        private UserStateDto state;

        @JsonIgnore
        public UserStateDto hideState() {
            return state.hideState();
        }

    }
}
