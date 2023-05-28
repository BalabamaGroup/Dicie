package com.balabama.mt.dtos.room.guessBoo;

import com.balabama.mt.entities.user.guessBoo.GuessBooAnswer;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class GuessBooAnswerDto {

    private GuessBooAnswer guessBooAnswer;
}
