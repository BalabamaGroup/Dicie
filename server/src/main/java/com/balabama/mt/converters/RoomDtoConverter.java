package com.balabama.mt.converters;

import com.balabama.mt.dtos.user.UserDto.UserWithState;
import com.balabama.mt.dtos.room.RoomCreateDto;
import com.balabama.mt.dtos.room.RoomDto;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.exceptions.MTException;
import com.balabama.mt.services.GameService;
import com.balabama.mt.services.RoomService;
import com.balabama.mt.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class RoomDtoConverter extends BaseDtoConverter {

    @Autowired
    private UserService userService;
    @Autowired
    private GameService gameService;
    @Autowired
    private RoomService roomService;


    public RoomDtoConverter(ModelMapper modelMapper) {
        super(modelMapper);
    }

    public Room convertFromDtoIn(RoomCreateDto dtoIn) {
        Room room = new Room();
        if (dtoIn.getName() == null) {
            throw new MTException(HttpStatus.BAD_REQUEST, "Specify a name when creating a room");
        }
        if (dtoIn.getGameId() != null) {
            room.setGame(gameService.getById(dtoIn.getGameId()));
        }
        room.connect(userService.getCurrent());
        room.setAdmin(userService.getCurrent());
        room.setName(dtoIn.getName());
        if (roomService.existByName(dtoIn.getName())) {
            throw MTException.alreadyExistByName(Room.class, dtoIn.getName());
        }
        if (dtoIn.getPassword() != null) {
            room.setPassword(dtoIn.getPassword());
            room.setIsPrivate(true);
        }
        room.setVoiceChatEnabled(dtoIn.getVoiceChatEnabled());
        return room;
    }

    public RoomDto convertRoom(Room room) {
        RoomDto roomDto = new RoomDto();
        for (User user : room.getUsers()) {
            UserWithState userWithState = simpleConvert(user, UserWithState.class);
            if (user.getUserState() != null) {
                userWithState.setState(user.getUserState().createDto());
            }
            roomDto.getUsers().add(userWithState);
        }
        if (room.getRoomData() != null) {
            roomDto.setRoomDataDto(room.getRoomData().createDto());
        }
        roomDto.setStart(room.getStart());
        roomDto.setName(room.getName());
        roomDto.setId(room.getId());
        roomDto.setIsPrivate(room.getIsPrivate());
        roomDto.setVoiceChatEnabled(room.getVoiceChatEnabled());
        return roomDto;
    }
}

