package com.balabama.mt.dtos.user.guessBoo;

import com.balabama.mt.dtos.user.UserStateDto;
import com.balabama.mt.entities.user.guessBoo.GuessBooAnswer;
import com.balabama.mt.entities.user.guessBoo.UserGuessBooState;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserGuessBooStateDto extends UserStateDto {

    private String word;
    private Integer winRound;
    private Boolean ready = false;
    private Long selectedUser;
    private Long selectedBy;
    private Boolean isGoing = false;
    private GuessBooAnswer lastAnswer;

    public UserGuessBooStateDto(UserGuessBooState state) {
        super(state);
        this.word = state.getWord();
        this.winRound = state.getWinRound();
        this.ready = state.getReady();
        this.isGoing = state.getIsGoing();
        this.lastAnswer = state.getLastAnswer();
        if (state.getSelectedBy() != null) {
            this.selectedBy = state.getSelectedBy();
        }
        if (state.getSelectedUser() != null) {
            this.selectedUser = state.getSelectedUser();
        }
    }

    @JsonIgnore
    public UserGuessBooStateDto hideState() {
        if (winRound == null) {
            word = "*****";
        }
        return this;
    }

    @JsonIgnore
    public UserGuessBooStateDto copy() {
        return new UserGuessBooStateDto(word, winRound, ready, selectedUser, selectedBy, isGoing, lastAnswer);
    }
}
