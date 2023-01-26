package com.balabama.mt.settings.security;

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
    @Value("${mt.root-uri}")
    String mtUri;

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(webSocketHandler,"/socket**").setAllowedOrigins("http://localhost:3000", "http://localhost:8080", "https://dicie.net", "https://dicie.net:8080");
    }

}