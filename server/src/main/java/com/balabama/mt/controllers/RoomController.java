package com.balabama.mt.controllers;

import com.balabama.mt.converters.RoomDtoConverter;
import com.balabama.mt.dtos.room.RoomCreateDto;
import com.balabama.mt.dtos.room.RoomDto;
import com.balabama.mt.services.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/room")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class RoomController {

    private final RoomService service;
    private final RoomDtoConverter converter;


    @PostMapping
    public RoomDto createRoom(@RequestBody RoomCreateDto roomCreateDto) {
        return converter.simpleConvert(service.save(converter.convertFromDtoIn(roomCreateDto)), RoomDto.class);
    }

    @PostMapping("/start/{id}")
    public RoomDto createRoom(@PathVariable Long id) {
        return converter.convertRoom(service.start(id));
    }


}
