package com.balabama.mt.services;

import com.balabama.mt.entities.user.guessBoo.GuessBooAnswer;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.user.guessBoo.GuessBooLog;
import java.util.List;

public interface GameGuessBooService {

    Room setWord(Long id, String word);

    Room checkWord(String word);

    Room selectUser(Long id);

    Room ready();

    Room askQuestion(String question);

    Room answer(GuessBooAnswer guessBooAnswer);

    Room acceptAnswer();

    Room changeTurn();

    List<GuessBooLog> getLogs(Long id);

}
