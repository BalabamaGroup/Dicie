package com.balabama.mt.service_implementation;

import com.balabama.mt.entities.games.GifpacabraPhrase;
import com.balabama.mt.entities.rooms.Room;
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

    public List<String> getDefaultPhrases(){
        return gifpacabraPhraseRepository.findAll().stream().map(GifpacabraPhrase::getPhrase).toList();
    }

    @Override
    public Room setPhrase(String phrase) {
        return null;
    }
}
