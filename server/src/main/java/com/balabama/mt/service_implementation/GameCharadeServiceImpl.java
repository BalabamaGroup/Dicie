package com.balabama.mt.service_implementation;

import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.rooms.charade.RoomCharadeData;
import com.balabama.mt.entities.user.charade.UserCharadeState;
import com.balabama.mt.services.GameCharadeService;
import com.balabama.mt.services.RoomService;
import com.balabama.mt.services.UserStateService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class GameCharadeServiceImpl implements GameCharadeService {

    private final RoomService roomService;
    private final UserStateService userStateService;


    @Override
    public Room setWord(Long userId, String word) {
        UserCharadeState userCharadeState = ((UserCharadeState) userStateService.getById(userId)).setWord(word);
        userCharadeState = (UserCharadeState) userStateService.save(userCharadeState);
        Room room = roomService.getById(userCharadeState.getUser().getRoom().getId());
        RoomCharadeData roomCharadeData = (RoomCharadeData) room.getRoomData();
        roomCharadeData.checkReady();
        room.setRoomData(roomCharadeData);
        return roomService.save(room);
    }
}
