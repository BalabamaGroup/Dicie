package com.balabama.mt.service_implementation;

import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.exceptions.MTException;
import com.balabama.mt.repositories.RoomRepository;
import com.balabama.mt.services.RoomService;
import com.balabama.mt.services.UserService;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class RoomServiceImpl implements RoomService {

    private final RoomRepository roomRepository;
    private final UserService userService;

    @Override
    public List<Room> list() {
        return roomRepository.findAll();
    }

    @Override
    public Room save(Room newRoom) {
        return roomRepository.save(newRoom);
    }

    @Override
    public Room getById(UUID id) {
        return roomRepository.findById(id).orElseThrow(() -> MTException.notFoundById(Room.class, id));
    }

    @Override
    public Room connect(UUID id) {
        Room room = getById(id);
        room.connect(userService.getCurrent());
        return save(room);
    }

    @Override
    public Room disconnect(UUID id) {
        Room room = getById(id);
        room.disconnect(userService.getCurrent());
        if (room.getUsers().isEmpty()) {
            delete(room);
            return new Room();
        } else {
            return save(room);
        }
    }

    @Override
    public void delete(UUID id) {
        delete(getById(id));
    }

    @Override
    public void delete(Room room) {
        roomRepository.delete(room);
    }

    @Override
    public Room start(UUID id) {
        Room room = getById(id);
        room.start();
        save(room);
        return room;
    }

    @Override
    public Room finish(UUID id) {
        Room room = getById(id);
        room.finish();
        save(room);
        return room;
    }


}
