package com.balabama.mt.service_implementation;

import com.balabama.mt.entities.games.Game;
import com.balabama.mt.exceptions.MTException;
import com.balabama.mt.repositories.GameRepository;
import com.balabama.mt.services.GameService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class GameServiceImpl implements GameService {

    private final GameRepository gameRepository;


    @Override
    public List<Game> list() {
        return gameRepository.findAll();
    }

    @Override
    public Game getById(Long id) {
        return gameRepository.findById(id).orElseThrow(() -> MTException.notFoundById(Game.class, id));
    }


}
