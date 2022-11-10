package com.balabama.mt.entities.user.charade;

import java.sql.Timestamp;
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
@Table(name = "charade_log")
@Data
@NoArgsConstructor
public class CharadeLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String question;
    private CharadeAnswer answer;
    @ManyToOne(fetch = FetchType.LAZY)
    private UserCharadeState state;

    public CharadeLog(String question, CharadeAnswer answer, UserCharadeState state) {
        this.question = question;
        this.answer = answer;
        this.state = state;
    }
}
