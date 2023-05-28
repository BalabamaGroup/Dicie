package com.balabama.mt.services;

import com.balabama.mt.entities.rooms.Room;

import java.util.List;

public interface GameMemetaurService {

    List<String> getDefaultPhrases();

    Room selectGif(String gif);

    Room voteGif(String gif);

    Room setPhrase(String phrase);
}
