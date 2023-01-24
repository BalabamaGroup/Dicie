package com.balabama.mt.settings.security;

import com.balabama.mt.controllers.VoiceHandler;
import java.util.logging.SocketHandler;
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
    private final VoiceHandler voiceHandler;
    @Value("${mt.root-uri}")
    String mtUri;

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(voiceHandler, "/voicechat**").setAllowedOrigins("http://localhost:3000", "http://localhost:8080", mtUri);

        registry.addHandler(webSocketHandler, "/socket**").setAllowedOrigins("http://localhost:3000", "http://localhost:8080", mtUri);
    }

}