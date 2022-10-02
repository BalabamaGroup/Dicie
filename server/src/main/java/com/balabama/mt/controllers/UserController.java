package com.balabama.mt.controllers;


import com.balabama.mt.converters.UserDtoConverter;
import com.balabama.mt.dtos.UserDto;
import com.balabama.mt.entities.User;
import com.balabama.mt.services.UserService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class UserController {


    private final UserDtoConverter dtoConverter;
    private final UserService userService;

    @GetMapping()
    public List<UserDto> list() {
        return dtoConverter.simpleConvert(userService.list(), UserDto.class);
    }

    @GetMapping("/{id}")
    public UserDto getById(@PathVariable Long id) {
        return dtoConverter.simpleConvert(userService.getById(id), UserDto.class);
    }

    @GetMapping("/current")
    public UserDto getCurrentUser() {
        return dtoConverter.simpleConvert(userService.getCurrent(), UserDto.class);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        userService.delete(id);
    }

}
