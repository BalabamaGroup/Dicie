package com.balabama.mt.service_implementation;

import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.UserState;
import com.balabama.mt.exceptions.MTException;
import com.balabama.mt.repositories.UserRepository;
import com.balabama.mt.repositories.UserStateRepository;
import com.balabama.mt.services.UserService;
import com.balabama.mt.services.UserStateService;
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
public class UserStateServiceImpl implements UserStateService {

    private final UserStateRepository userStateRepository;

    @Override
    public UserState getById(Long id) {
        return userStateRepository.findById(id).orElseThrow(() -> MTException.notFoundById(UserState.class, id));
    }

    @Override
    public UserState save(UserState userState) {
        return userStateRepository.save(userState);
    }


}
