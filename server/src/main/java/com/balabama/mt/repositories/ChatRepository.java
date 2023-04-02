package com.balabama.mt.repositories;

import com.balabama.mt.entities.rooms.Chat;
import com.balabama.mt.entities.rooms.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ChatRepository extends JpaRepository<Chat, UUID> {
}