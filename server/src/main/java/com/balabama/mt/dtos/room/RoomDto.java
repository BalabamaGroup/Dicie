package com.balabama.mt.dtos.room;

import com.balabama.mt.dtos.UserDto.UserWithState;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class RoomDto {

    private List<UserWithState> users;

}
