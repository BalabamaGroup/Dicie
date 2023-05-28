package com.balabama.mt.controllers;

import com.balabama.mt.converters.RoomDtoConverter;
import com.balabama.mt.dtos.StringDto;
import com.balabama.mt.services.GameMemetaurService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/api/game_memetaur")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class GameMemetaurController {

    private final String API_KEY = "AIzaSyBiokwDtyObCB3OYuHokrO6ChOoaI9DyWU";
    private static final String CLIENT_KEY = "Dicie";

    private final GameMemetaurService service;
    private final RoomDtoConverter converter;
    private final WebSocketHandler webSocketHandler;


    @GetMapping("/default_phrases")
    public List<String> getDefault() {
        return service.getDefaultPhrases();
    }

    @PostMapping("/set_phrase")
    public void setPhrase(@RequestBody StringDto word) {
        webSocketHandler.sendRoomMessage(converter.convertRoom(service.setPhrase(word.getWord())));
    }

    @GetMapping("/{query}")
    public String searchGif(@PathVariable String query) throws Exception {
        String url = String.format(
            "https://tenor.googleapis.com/v2/search?q=%1$s&key=%2$s&client_key=%3$s&limit=%4$s&contentfilter=off&media_filter=gif",
            query, API_KEY, CLIENT_KEY, 25);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(url, String.class);
        return responseEntity.getBody();
    }

}
