package com.balabama.mt.controllers;


import com.balabama.mt.converters.UserDtoConverter;
import com.balabama.mt.dtos.user.UserDto;
import com.balabama.mt.entities.user.User;
import com.balabama.mt.services.UserService;

import java.security.Principal;
import java.util.List;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class UserController {


    private final UserDtoConverter converter;
    private final UserService service;

    @GetMapping()
    public List<UserDto> list() {
        return converter.simpleConvert(service.list(), UserDto.class);
    }

    @GetMapping("/{id}")
    public UserDto getById(@PathVariable Long id) {
        return converter.simpleConvert(service.getById(id), UserDto.class);
    }

    @GetMapping("/current")
    public UserDto getCurrentUser() {
        return converter.simpleConvert(service.getCurrent(), UserDto.class);
    }

    @GetMapping("/leaderboard")
    public List<UserDto> getLeaderboard() {
        return converter.simpleConvert(service.getLeaderboard(), UserDto.class);
    }

    @PutMapping("/change_theme")
    public UserDto changeTheme(@RequestBody User.Theme theme) {
        return converter.simpleConvert(service.changeTheme(theme), UserDto.class);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        service.delete(id);
    }

    @GetMapping("/principal")
    public Principal user(Principal user) {
        return user;
    }

}
