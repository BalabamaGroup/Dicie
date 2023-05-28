package com.balabama.mt.service_implementation;

import com.balabama.mt.entities.games.Memetaur;
import com.balabama.mt.entities.games.MemetaurPhrase;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.rooms.memetaur.RoomMemetaurData;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.memetaur.UserMemetaurState;
import com.balabama.mt.repositories.MemetaurPhraseRepository;
import com.balabama.mt.services.GameMemetaurService;
import com.balabama.mt.services.RoomService;
import com.balabama.mt.services.UserService;
import com.balabama.mt.services.UserStateService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class GameMemetaurServiceImpl implements GameMemetaurService {

    private final RoomService roomService;
    private final UserStateService userStateService;
    private final UserService userService;
    private final MemetaurPhraseRepository memetaurPhraseRepository;

    public List<String> getDefaultPhrases() {
        return memetaurPhraseRepository.findAll().stream().map(MemetaurPhrase::getPhrase).toList();
    }

    @Override
    public Room setPhrase(String phrase) {
        User currentUser = userService.getCurrent();
        Room room = currentUser.getRoom();
        room.validateGame(Memetaur.class);
        ((RoomMemetaurData) room.getRoomData()).setPhrase(phrase);
        return roomService.save(room);
    }

    @Override
    public Room selectGif(String gif) {
        User currentUser = userService.getCurrent();
        UserMemetaurState userState = (UserMemetaurState) currentUser.getUserState();
        userState.setGif(gif);
        Room room = getRoomByState(userState);
        RoomMemetaurData roomData = (RoomMemetaurData) room.getRoomData();
        roomData.allUsersSetGif();
        room.setRoomData(roomData);
        return roomService.save(room);
    }

    @Override
    public Room voteGif(String gif) {
        User currentUser = userService.getCurrent();
        UserMemetaurState userState = (UserMemetaurState) currentUser.getUserState();
        userState.setVotedGif(gif);
        Room room = getRoomByState(userState);
        return roomService.save(room);
    }


    private Room getRoomByState(UserMemetaurState userMemetaurState) {
        userMemetaurState = (UserMemetaurState) userStateService.save(userMemetaurState);
        return roomService.getById(userMemetaurState.getUser().getRoom().getId());
    }
}
