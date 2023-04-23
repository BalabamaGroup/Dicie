package com.balabama.mt.dtos.room;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class RoomCreateDto {

    private Long gameId;
    private String name;
    private String password;
    private Boolean isFriendMod;
}
