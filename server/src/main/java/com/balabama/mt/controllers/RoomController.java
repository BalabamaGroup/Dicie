package com.balabama.mt.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/room")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class RoomController {

    private final WebSocketHandler webSocketHandler;


    @GetMapping("/test}")
    public void getById(@PathVariable Long id) {
        webSocketHandler.sendMessageToAllSessions();
    }


}
