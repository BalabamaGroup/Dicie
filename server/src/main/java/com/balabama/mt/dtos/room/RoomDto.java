package com.balabama.mt.dtos.room;

import com.balabama.mt.dtos.user.UserDto;
import com.balabama.mt.dtos.user.UserDto.UserWithState;
import com.balabama.mt.entities.rooms.RoomData;
import com.balabama.mt.entities.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class RoomDto {

    private List<UserWithState> users = new ArrayList<>();
    private RoomDataDto roomDataDto;
    private Boolean start = false;
    private String name;
    private UUID id;
    private UserDto admin;

    @JsonIgnore
    public List<Long> getIds() {
        return users.stream().map(UserDto::getId).collect(Collectors.toList());
    }

    @JsonIgnore
    public void getForUser(Long userId) {
        users.stream().filter(user-> Objects.equals(user.getId(), userId)).findFirst().ifPresent(UserWithState::hideState);
    }


}
