package com.balabama.mt.repositories;

import com.balabama.mt.dtos.ExistingUserDto;
import com.balabama.mt.entities.User;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    @Query("select new com.balabama.mt.dtos.ExistingUserDto(user.username, user.email) FROM User user")
    List<ExistingUserDto> findDistinctByUsernameAndDistinctByEmail();
}