package com.balabama.mt.services;

import com.balabama.mt.entities.rooms.Room;

public interface RoomService {

    Room save(Room room);

    Room start(Long id);

    Room getById(Long id);

    Room connect(Long id);
}
