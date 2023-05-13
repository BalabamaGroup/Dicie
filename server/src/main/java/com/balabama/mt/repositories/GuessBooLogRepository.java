package com.balabama.mt.repositories;

import com.balabama.mt.entities.user.guessBoo.GuessBooLog;
import com.balabama.mt.entities.user.guessBoo.UserGuessBooState;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GuessBooLogRepository extends JpaRepository<GuessBooLog, Long> {

    List<GuessBooLog> findAllByState(UserGuessBooState state);

}