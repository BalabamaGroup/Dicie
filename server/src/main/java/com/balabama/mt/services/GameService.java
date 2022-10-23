package com.balabama.mt.services;

import com.balabama.mt.entities.Game;
import java.util.List;

public interface GameService {

    List<Game> list();

    Game getById(Long id);
}
