package com.balabama.mt.repositories;

import com.balabama.mt.entities.user.charade.CharadeLog;
import com.balabama.mt.entities.user.charade.UserCharadeState;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CharadeLogRepository extends JpaRepository<CharadeLog, Long> {

    List<CharadeLog> findAllByState(UserCharadeState state);

}