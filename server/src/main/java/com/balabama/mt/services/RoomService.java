package com.balabama.mt.services;

import com.balabama.mt.entities.rooms.Room;
import java.util.List;
import java.util.UUID;

public interface RoomService {


    List<Room> list();

    Room save(Room room);

    Room start(UUID id);

    Room finish(UUID id);

    Room getById(UUID id);

    Room connect(UUID id);
    Room disconnect(UUID id);

    void delete(UUID id);
    void delete(Room room);
}
