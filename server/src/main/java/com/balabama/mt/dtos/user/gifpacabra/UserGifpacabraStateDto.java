package com.balabama.mt.dtos.user.gifpacabra;

import com.balabama.mt.dtos.user.UserStateDto;
import com.balabama.mt.entities.user.charade.CharadeAnswer;
import com.balabama.mt.entities.user.charade.UserCharadeState;
import com.balabama.mt.entities.user.gifpacabra.UserGifpacabraState;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserGifpacabraStateDto extends UserStateDto {

    private String gif;
    private String votedGif;

    public UserGifpacabraStateDto(UserGifpacabraState state) {
        super(state);
        this.gif = state.getGif();
        this.votedGif = state.getGif();
    }

    @JsonIgnore
    public UserGifpacabraStateDto hideState() {
        return this;
    }

    @JsonIgnore
    public UserGifpacabraStateDto copy() {
        return new UserGifpacabraStateDto(gif, votedGif);
    }
}
