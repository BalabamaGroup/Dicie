package com.balabama.mt.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
@Slf4j
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class WebSocketHandler extends TextWebSocketHandler {

    private final ObjectMapper mapper = new ObjectMapper();
    private final Set<WebSocketSession> sessions = new CopyOnWriteArraySet<>();

    @Override
    @Transactional
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        sessions.add(session);
        session.sendMessage(new TextMessage(mapper.writeValueAsString("KUKU")));
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        sessions.remove(session);
    }

    @Override
    @Transactional
    public void handleTextMessage(WebSocketSession session, TextMessage jsonTextMessage) throws IOException {
        session.sendMessage(new TextMessage(mapper.writeValueAsString("HI test")));
    }

    @Transactional
    public void sendMessageToAllSessions() {
        for (WebSocketSession session : sessions) {
            try {
                session.sendMessage(new TextMessage(mapper.writeValueAsString("HI lox")));
            } catch (Exception e) {
                log.error("Cannot send statistic to websocket session.", e);
            }
        }
    }

}