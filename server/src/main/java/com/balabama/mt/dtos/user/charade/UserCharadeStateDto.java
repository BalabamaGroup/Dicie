package com.balabama.mt.dtos.user.charade;

import com.balabama.mt.dtos.user.UserStateDto;
import com.balabama.mt.entities.user.charade.CharadeAnswer;
import com.balabama.mt.entities.user.charade.UserCharadeState;
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
public class UserCharadeStateDto extends UserStateDto {

    private String word;
    private Integer winRound;
    private Boolean ready = false;
    private Long selectedUser;
    private Long selectedBy;
    private Boolean isGoing = false;
    private CharadeAnswer lastAnswer;

    public UserCharadeStateDto(UserCharadeState state) {
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
    public UserCharadeStateDto hideState() {
        if (winRound == null) {
            word = "*****";
        }
        return this;
    }

    @JsonIgnore
    public UserCharadeStateDto copy() {
        return new UserCharadeStateDto(word, winRound, ready, selectedUser, selectedBy, isGoing, lastAnswer);
    }
}
