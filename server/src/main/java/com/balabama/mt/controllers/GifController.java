package com.balabama.mt.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/gifs")
public class GifController {

    private final String API_KEY = "AIzaSyBiokwDtyObCB3OYuHokrO6ChOoaI9DyWU";
    private static final String CLIENT_KEY = "Dicie";

    @GetMapping("/{query}")
    public String searchGif(@PathVariable String query) throws Exception {
         String url = String.format("https://tenor.googleapis.com/v2/search?q=%1$s&key=%2$s&client_key=%3$s&limit=%4$s",
                 query, API_KEY, CLIENT_KEY, 10);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(url, String.class);
        return responseEntity.getBody();
    }

}

