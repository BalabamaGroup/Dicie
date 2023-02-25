package com.balabama.mt.services;

import com.balabama.mt.entities.rooms.Chat;

import java.util.List;
import java.util.UUID;

public interface ChatService {
    Chat getById(UUID id);

    Chat getByUserId(Long id);

    Boolean existById(UUID id);

    Chat save(Chat chat);

    void delete(UUID id);

    List<Long> getIdUsersInRoomByOneUserId(Long id);
}
