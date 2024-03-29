package com.balabama.mt.repositories;

import com.balabama.mt.entities.rooms.Room;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, UUID> {

    Boolean existsByName(String name);

    @Query("SELECT r FROM Room r JOIN r.users u WHERE u.id = :userId")
    Room findRoomByUserId(Long userId);
}