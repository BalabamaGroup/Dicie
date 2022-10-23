package com.balabama.mt.service_implementation;

import com.balabama.mt.entities.Room;
import com.balabama.mt.entities.User;
import com.balabama.mt.exceptions.MTException;
import com.balabama.mt.repositories.RoomRepository;
import com.balabama.mt.repositories.UserRepository;
import com.balabama.mt.services.RoomService;
import com.balabama.mt.services.UserService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class RoomServiceImpl implements RoomService {

    private final RoomRepository roomRepository;

    @Override
    public Room save(Room newRoom) {

      return roomRepository.save(newRoom);
    }


}
