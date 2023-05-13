package com.balabama.mt.repositories;

import com.balabama.mt.entities.games.GifpacabraPhrase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GifpacabraPhraseRepository extends JpaRepository<GifpacabraPhrase, Long> {
}