package com.balabama.mt.repositories;

import com.balabama.mt.entities.games.MemetaurPhrase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemetaurPhraseRepository extends JpaRepository<MemetaurPhrase, Long> {
}
