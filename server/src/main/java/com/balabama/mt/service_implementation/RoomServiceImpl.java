package com.balabama.mt.service_implementation;

import com.balabama.mt.entities.rooms.Chat;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.exceptions.MTException;
import com.balabama.mt.repositories.ChatRepository;
import com.balabama.mt.repositories.RoomRepository;
import com.balabama.mt.services.ChatService;
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
    private final ChatService chatService;
    private final UserService userService;

    @Override
    public List<Room> list() {
        return roomRepository.findAll();
    }

    @Override
    public Room save(Room newRoom) {
        Room room = roomRepository.save(newRoom);
        if (!chatService.existById(room.getId())) {
            chatService.save(new Chat(room.getId()));
        }
        return room;
    }

    @Override
    public Boolean existByName(String name) {
        return roomRepository.existsByName(name);
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
        if (room.getRoomData() != null && room.getRoomData().checkFinish()) {
            return finish(room.getId());
        }
        if (room.getRoomData() != null && room.getStart() && room.getUsers().size() == 1) {
            finish(room.getId());
        }
        if (room.getUsers().isEmpty()) {
            delete(room);
            return new Room();
        } else {
            return save(room);
        }
    }

    @Override
    public void delete(UUID id) {
        Room room = getById(id);
        room.validateAdmin(userService.getCurrent());
        delete(room);
    }


    @Override
    public void delete(Room room) {
        chatService.delete(room.getId());
        roomRepository.delete(room);
    }

    @Override
    public void passwordValidate(UUID id, String password) {
        getById(id).validatePassword(password);
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
        room = save(room);
        room.finish();
        return save(room);
    }


}
