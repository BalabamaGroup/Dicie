package com.balabama.mt.services;

import com.balabama.mt.entities.user.User;

import java.util.List;

public interface UserService {

    List<User> list();

    User getById(Long id);

    User getCurrent();

    User changeTheme(User.Theme theme);


    void delete(Long id);

    User save(User user);

    List<Long> getAllUsersIdsInRoomByUserId(Long id);

}
