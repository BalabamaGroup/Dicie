package com.balabama.mt.controllers;

import com.balabama.mt.entities.rooms.Chat;
import com.balabama.mt.services.ChatService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
import javax.transaction.Transactional;

@Component
@Slf4j
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class WebSocketChatHandler extends TextWebSocketHandler {

    private final ObjectMapper mapper = new ObjectMapper();
    private final Set<WebSocketSession> sessions = new CopyOnWriteArraySet<>();
    private final ChatService chatService;

    @Override
    @Transactional
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        sessions.add(session);
        session.sendMessage(new TextMessage(mapper.writeValueAsString(
                chatService.getByUserId(Long.parseLong(Objects.requireNonNull(session.getUri()).getQuery()))
                        .getJson())));
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        sessions.remove(session);
    }

    @Override
    @Transactional
    public void handleTextMessage(WebSocketSession session, TextMessage jsonTextMessage) throws IOException {
        Long senderId = Long.parseLong(Objects.requireNonNull(session.getUri()).getQuery());
        Chat chat = chatService.getByUserId(senderId);
        chat.appendLog(jsonTextMessage.getPayload());
        chatService.save(chat);
        List<Long> usersId = chatService.getIdUsersInRoomByOneUserId(senderId);
        for (WebSocketSession otherSessions : sessions) {
            try {
                Long userId = Long.parseLong(Objects.requireNonNull(otherSessions.getUri()).getQuery());
                if (usersId.contains(userId)) {
                    otherSessions.sendMessage(new TextMessage(mapper.writeValueAsString(jsonTextMessage.getPayload())));
                }
            } catch (Exception e) {
                log.error("Cannot send chat to websocket session.", e);
            }
        }
    }

}