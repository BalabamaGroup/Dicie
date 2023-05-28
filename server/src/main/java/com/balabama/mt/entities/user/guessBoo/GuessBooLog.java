package com.balabama.mt.entities.user.guessBoo;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "guess_boo_log")
@Data
@NoArgsConstructor
public class GuessBooLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String question;
    private GuessBooAnswer answer;
    @ManyToOne(fetch = FetchType.LAZY)
    private UserGuessBooState state;

    public GuessBooLog(String question, GuessBooAnswer answer, UserGuessBooState state) {
        this.question = question;
        this.answer = answer;
        this.state = state;
    }
}
