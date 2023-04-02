package com.balabama.mt.repositories;

import com.balabama.mt.dtos.ExistingUserDto;
import com.balabama.mt.entities.user.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    @Query("SELECT u.id FROM User u WHERE u.room IN (SELECT ur.room FROM User ur WHERE ur.id = :userId)")
    List<Long> getUserIdsByUserId(@Param("userId") Long userId);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    @Query("select new com.balabama.mt.dtos.ExistingUserDto(user.username, user.email) FROM User user")
    List<ExistingUserDto> findDistinctByUsernameAndDistinctByEmail();
}