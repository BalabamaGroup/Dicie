package com.balabama.mt.service_implementation;

import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.rooms.charade.RoomCharadeData;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.charade.UserCharadeState;
import com.balabama.mt.exceptions.MTException;
import com.balabama.mt.services.GameCharadeService;
import com.balabama.mt.services.RoomService;
import com.balabama.mt.services.UserService;
import com.balabama.mt.services.UserStateService;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class GameCharadeServiceImpl implements GameCharadeService {

    private final RoomService roomService;
    private final UserStateService userStateService;
    private final UserService userService;


    @Override
    public Room setWord(Long userId, String word) {
        User current = userService.getCurrent();
        if (current.getId().equals(userId) || !Objects.equals(((UserCharadeState) current.getUserState()).getSelectedUser(), userId)) {
            throw new MTException(HttpStatus.FORBIDDEN, "You can't set a word");
        }
        UserCharadeState userCharadeState = ((UserCharadeState) userStateService.getById(userId)).setWord(word);
        Room room = getRoomByState(userCharadeState);
        RoomCharadeData roomCharadeData = (RoomCharadeData) room.getRoomData();
        roomCharadeData.checkReady();
        room.setRoomData(roomCharadeData);
        return roomService.save(room);
    }

    @Override
    public Room checkWord(String word) {
        UserCharadeState userCharadeState = ((UserCharadeState) userStateService.getById(userService.getCurrent().getId())).checkWord(word);
        Room room = getRoomByState(userCharadeState);
        RoomCharadeData roomCharadeData = (RoomCharadeData) room.getRoomData();
        if (roomCharadeData.checkFinish()) {
            return roomService.finish(room.getId());
        } else {
            return roomService.save(room);
        }
    }

    @Override
    public Room selectUser(Long id) {
        UserCharadeState userCharadeState = ((UserCharadeState) userStateService.getById(userService.getCurrent().getId())).addSelectedUser(
            userService.getById(id));
        return getRoomByState(userCharadeState);

    }

    private Room getRoomByState(UserCharadeState userCharadeState) {
        userCharadeState = (UserCharadeState) userStateService.save(userCharadeState);
        return roomService.getById(userCharadeState.getUser().getRoom().getId());
    }


}
