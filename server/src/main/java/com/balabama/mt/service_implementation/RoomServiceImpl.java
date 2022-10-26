package com.balabama.mt.service_implementation;

import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.exceptions.MTException;
import com.balabama.mt.repositories.RoomRepository;
import com.balabama.mt.services.RoomService;
import com.balabama.mt.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class RoomServiceImpl implements RoomService {

    private final RoomRepository roomRepository;
    private final UserService userService;

    @Override
    public Room save(Room newRoom) {
        return roomRepository.save(newRoom);
    }

    @Override
    public Room getById(Long id) {
        return roomRepository.findById(id).orElseThrow(() -> MTException.notFoundById(Room.class, id));
    }

    @Override
    public Room connect(Long id) {
        Room room = getById(id);
        room.connect(userService.getCurrent());
        return save(room);
    }

    @Override
    public Room start(Long id) {
        Room room = getById(id);
        room.start();
        save(room);
        return room;
    }


}
