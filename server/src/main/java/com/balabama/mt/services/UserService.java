package com.balabama.mt.services;

import com.balabama.mt.entities.User;
import java.util.List;

public interface UserService {

    List<User> list();

    User getById(Long id);

    User getCurrent();


    void delete(Long id);

    User save(User user);
}
