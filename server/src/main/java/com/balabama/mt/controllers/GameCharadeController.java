package com.balabama.mt.controllers;

import com.balabama.mt.converters.RoomDtoConverter;
import com.balabama.mt.dtos.StringDto;
import com.balabama.mt.dtos.room.RoomDto;
import com.balabama.mt.services.GameCharadeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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


    @PostMapping(value = "/set_word/{userId}")
    public void setWord(@PathVariable Long userId, @RequestBody StringDto word) {
        webSocketHandler.sendRoomMessage(converter.convertRoom(service.setWord(userId, word.getWord())));
    }

    @PostMapping("/check_word")
    public void checkWord(@RequestBody StringDto word) {
        webSocketHandler.sendRoomMessage(converter.convertRoom(service.checkWord(word.getWord())));
    }

}
