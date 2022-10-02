package com.balabama.mt.service_implementation;

import com.balabama.mt.entities.User;
import com.balabama.mt.exceptions.MTException;
import com.balabama.mt.repositories.UserRepository;
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
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;


    @Override
    public List<User> list() {
        return userRepository.findAll();
    }

    @Override
    public User getById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> MTException.notFoundById(User.class, id));
    }

    @Override
    public User getCurrent() {
        return getByUsername(getCurrentUserName());
    }

    private User getByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow(() -> MTException.notFound(User.class, username, "Username"));
    }

    private String getCurrentUserName() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication instanceof UsernamePasswordAuthenticationToken) {
            Object o = authentication.getPrincipal();
            if (o instanceof UserDetails userDetails) {
                if (userDetails.getUsername() != null) {
                    return userDetails.getUsername();
                }
            }
        }
        throw new MTException(HttpStatus.NOT_FOUND, "Can't find the current user");
    }

    @Override
    public void delete(Long id) {
        userRepository.delete(getById(id));
    }

    @Override
    public User save(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw MTException.alreadyExist(User.class, user.getUsername(), "Email");
        }
        if (userRepository.existsByUsername(user.getUsername())) {
            throw MTException.alreadyExistByName(User.class, user.getUsername());
        }
        return userRepository.save(user);
    }


}
