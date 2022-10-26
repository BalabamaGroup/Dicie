package com.balabama.mt.services;

import com.balabama.mt.entities.user.User;
import com.balabama.mt.entities.user.UserState;
import java.util.List;

public interface UserStateService {

    UserState getById(Long id);

    UserState save(UserState user);
}
