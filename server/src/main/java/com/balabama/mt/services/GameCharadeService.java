package com.balabama.mt.services;

import com.balabama.mt.entities.rooms.Room;

public interface GameCharadeService {

    Room setWord(Long id, String word);

    Room checkWord(String word);

    Room selectUser(Long id);
}
