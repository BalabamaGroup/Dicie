package com.balabama.mt.controllers;


import com.balabama.mt.converters.RoomDtoConverter;
import com.balabama.mt.dtos.GameDto;
import com.balabama.mt.services.GameService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/game")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class GameController {

    private final GameService service;
    private final RoomDtoConverter converter;


    @GetMapping()
    public List<GameDto> list() {
        return converter.simpleConvert(service.list(), GameDto.class);
    }

}
