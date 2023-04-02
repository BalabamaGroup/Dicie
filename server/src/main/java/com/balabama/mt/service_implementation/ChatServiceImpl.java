package com.balabama.mt.service_implementation;

import com.balabama.mt.entities.rooms.Chat;
import com.balabama.mt.entities.rooms.Room;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.UserState;
import com.balabama.mt.exceptions.MTException;
import com.balabama.mt.repositories.ChatRepository;
import com.balabama.mt.repositories.UserRepository;
import com.balabama.mt.repositories.UserStateRepository;
import com.balabama.mt.services.ChatService;
import com.balabama.mt.services.UserService;
import com.balabama.mt.services.UserStateService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class ChatServiceImpl implements ChatService {

    private final ChatRepository chatRepository;
    private final UserService userService;

    @Override
    public Chat getById(UUID id) {
        return chatRepository.findById(id).orElseThrow(() -> MTException.notFoundById(Chat.class, id));
    }

    @Override
    public Chat getByUserId(Long id) {
        return getById(userService.getById(id).getRoom().getId());
    }

    @Override
    public Boolean existById(UUID id) {
        return chatRepository.existsById(id);
    }

    @Override
    public List<Long> getIdUsersInRoomByOneUserId(Long id) {
        return userService.getById(id).getRoom().getUsers().stream().map(User::getId).collect(Collectors.toList());
    }


    @Override
    public Chat save(Chat chat) {
        return chatRepository.save(chat);
    }

    @Override
    public void delete(UUID id) {
        chatRepository.findById(id).ifPresent(chatRepository::delete);

    }


}
