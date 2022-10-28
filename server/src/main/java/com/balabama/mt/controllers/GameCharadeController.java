package com.balabama.mt.controllers;

import com.balabama.mt.converters.RoomDtoConverter;
import com.balabama.mt.dtos.room.RoomDto;
import com.balabama.mt.services.GameCharadeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/game_charade")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class GameCharadeController {

    private final GameCharadeService service;
    private final RoomDtoConverter converter;
    private final WebSocketHandler webSocketHandler;


    @PostMapping("/set_word/{userId}")
    public RoomDto createRoom(@PathVariable Long userId, @RequestBody String word) {
        RoomDto roomDto = converter.convertRoom(service.setWord(userId, word));
        webSocketHandler.sendRoomMessage(roomDto);
        return roomDto;
    }

}