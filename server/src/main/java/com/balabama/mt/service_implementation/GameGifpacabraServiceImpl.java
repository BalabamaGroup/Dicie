package com.balabama.mt.service_implementation;

import com.balabama.mt.entities.games.Gifpacabra;
import com.balabama.mt.entities.games.GifpacabraPhrase;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.rooms.gifpacabra.RoomGifpacabraData;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.gifpacabra.UserGifpacabraState;
import com.balabama.mt.repositories.GifpacabraPhraseRepository;
import com.balabama.mt.services.GameGifpacabraService;
import com.balabama.mt.services.RoomService;
import com.balabama.mt.services.UserService;
import com.balabama.mt.services.UserStateService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class GameGifpacabraServiceImpl implements GameGifpacabraService {

    private final RoomService roomService;
    private final UserStateService userStateService;
    private final UserService userService;
    private final GifpacabraPhraseRepository gifpacabraPhraseRepository;

    public List<String> getDefaultPhrases() {
        return gifpacabraPhraseRepository.findAll().stream().map(GifpacabraPhrase::getPhrase).toList();
    }

    @Override
    public Room setPhrase(String phrase) {
        User currentUser = userService.getCurrent();
        Room room = currentUser.getRoom();
        room.validateGame(Gifpacabra.class);
        ((RoomGifpacabraData) room.getRoomData()).setPhrase(phrase);
        return roomService.save(room);
    }

    @Override
    public Room selectGif(String gif) {
        User currentUser = userService.getCurrent();
        UserGifpacabraState userState = (UserGifpacabraState)currentUser.getUserState();
        userState.setGif(gif);
        Room room = getRoomByState(userState);
        RoomGifpacabraData roomData = (RoomGifpacabraData)room.getRoomData();
        roomData.allUsersSetGif();
        room.setRoomData(roomData);
        return roomService.save(room);
    }



    private Room getRoomByState(UserGifpacabraState userGifpacabraState) {
        userGifpacabraState = (UserGifpacabraState) userStateService.save(userGifpacabraState);
        return roomService.getById(userGifpacabraState.getUser().getRoom().getId());
    }
}
