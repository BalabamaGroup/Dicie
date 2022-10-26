package com.balabama.mt.repositories;

import com.balabama.mt.entities.user.UserState;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserStateRepository extends JpaRepository<UserState, Long> {

}