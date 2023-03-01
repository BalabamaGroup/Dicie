package com.balabama.mt.settings.security;

import com.balabama.mt.controllers.WebSocketChatHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class WebSocketServerConfiguration implements WebSocketConfigurer {

    private final WebSocketHandler webSocketHandler;
    private final WebSocketChatHandler webSocketChatHandler;
    @Value("${mt.root-uri}")
    String mtUri;

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(webSocketHandler,"/socket**").setAllowedOrigins("http://localhost:3000", "http://localhost:8080", "http://165.232.96.113/","http://165.232.96.113:8080" ,"https://dicie.net", "https://dicie.net:8080","http://dicie.net", "http://dicie.net:8080");
        registry.addHandler(webSocketChatHandler,"/caht-socket**").setAllowedOrigins("http://localhost:3000", "http://localhost:8080", "http://165.232.96.113/","http://165.232.96.113:8080" ,"https://dicie.net", "https://dicie.net:8080","http://dicie.net", "http://dicie.net:8080");


    }
}