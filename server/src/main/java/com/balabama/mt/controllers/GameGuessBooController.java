package com.balabama.mt.controllers;

import com.balabama.mt.converters.RoomDtoConverter;
import com.balabama.mt.dtos.QuestionDto;
import com.balabama.mt.dtos.StringDto;
import com.balabama.mt.dtos.room.guessBoo.GuessBooAnswerDto;
import com.balabama.mt.dtos.user.guessBoo.GuessBooLogDto;
import com.balabama.mt.services.GameGuessBooService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/game_guess_boo")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class GameGuessBooController {

    private final GameGuessBooService service;
    private final RoomDtoConverter converter;
    private final WebSocketHandler webSocketHandler;


    @GetMapping("/get_history/{id}")
    public List<GuessBooLogDto> getLog(@PathVariable Long id) {
        return converter.simpleConvert(service.getLogs(id), GuessBooLogDto.class);
    }


    @PostMapping(value = "/set_word/{userId}")
    public void setWord(@PathVariable Long userId, @RequestBody StringDto word) {
        webSocketHandler.sendRoomMessage(converter.convertRoom(service.setWord(userId, word.getWord())));
    }

    @PostMapping("/check_word")
    public void checkWord(@RequestBody StringDto word) {
        webSocketHandler.sendRoomMessage(converter.convertRoom(service.checkWord(word.getWord())));
    }

    @PostMapping("/select_user/{userId}")
    public void selectUser(@PathVariable Long userId) {
        webSocketHandler.sendRoomMessage(converter.convertRoom(service.selectUser(userId)));
    }

    @PostMapping("/ready")
    public void ready() {
        webSocketHandler.sendRoomMessage(converter.convertRoom(service.ready()));
    }

    @PostMapping("/ask_question")
    public void askQuestion(@RequestBody QuestionDto questionDto) {
        webSocketHandler.sendRoomMessage(converter.convertRoom(service.askQuestion(questionDto.getQuestion())));
    }

    @PostMapping("/answer")
    public void answer(@RequestBody GuessBooAnswerDto guessBooAnswer) {
        webSocketHandler.sendRoomMessage(converter.convertRoom(service.answer(guessBooAnswer.getGuessBooAnswer())));
    }

    @PostMapping("/accept_answer")
    public void acceptAnswer() {
        webSocketHandler.sendRoomMessage(converter.convertRoom(service.acceptAnswer()));
    }

    @PostMapping("/change_turn")
    public void changeTurn() {
        webSocketHandler.sendRoomMessage(converter.convertRoom(service.changeTurn()));
    }


}
