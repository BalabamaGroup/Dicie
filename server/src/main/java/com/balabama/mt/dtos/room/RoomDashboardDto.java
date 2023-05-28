package com.balabama.mt.dtos.room;

import com.balabama.mt.dtos.user.UserDto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.UUID;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class RoomDashboardDto {

    private Integer numberOfUsers;
    private Boolean start = false;
    private String name;
    private UUID id;
    private UserDto admin;
    private Boolean isPrivate = false;
    private Boolean isFriendMode = false;
    private Long gameId;
}
