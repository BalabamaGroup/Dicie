package com.balabama.mt.controllers;

import com.balabama.mt.converters.BaseDtoConverter;
import com.balabama.mt.converters.RoomDtoConverter;
import com.balabama.mt.dtos.GameDto;
import com.balabama.mt.dtos.room.RoomDto;
import com.balabama.mt.services.GameCharadeService;
import com.balabama.mt.services.GameService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/game")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class GameController {

    private final GameService service;
    private final BaseDtoConverter converter;


    @GetMapping()
    public List<GameDto> list() {
        return converter.simpleConvert(service.list(), GameDto.class);
    }

}
