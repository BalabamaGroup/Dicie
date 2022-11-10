package com.balabama.mt.services;

import com.balabama.mt.entities.user.charade.CharadeAnswer;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.user.charade.CharadeLog;
import java.util.List;

public interface GameCharadeService {

    Room setWord(Long id, String word);

    Room checkWord(String word);

    Room selectUser(Long id);

    Room ready();

    Room askQuestion(String question);

    Room answer(CharadeAnswer charadeAnswer);

    Room acceptAnswer();

    List<CharadeLog> getLogs(Long id);

}
