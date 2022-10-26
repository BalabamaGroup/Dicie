package com.balabama.mt.controllers;

import com.balabama.mt.converters.RoomDtoConverter;
import com.balabama.mt.dtos.room.RoomCreateDto;
import com.balabama.mt.dtos.room.RoomDto;
import com.balabama.mt.services.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/room")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class RoomController {

    private final RoomService service;
    private final RoomDtoConverter converter;
    private final WebSocketHandler webSocketHandler;

    @GetMapping("/{id}")
    public RoomDto getById(@PathVariable Long id) {
        return converter.convertRoom(service.getById(id));
    }

    @PostMapping
    public RoomDto createRoom(@RequestBody RoomCreateDto roomCreateDto) {
        return converter.simpleConvert(service.save(converter.convertFromDtoIn(roomCreateDto)), RoomDto.class);
    }

    @PostMapping("/start/{id}")
    public RoomDto start(@PathVariable Long id) {
        RoomDto roomDto = converter.convertRoom(service.start(id));
        webSocketHandler.sendRoomMessage(roomDto);
        return roomDto;
    }

    @PutMapping("/connect/{id}")
    public RoomDto connect(@PathVariable Long id) {
        RoomDto roomDto = converter.convertRoom(service.connect(id));
        webSocketHandler.sendRoomMessage(roomDto);
        return roomDto;
    }


}