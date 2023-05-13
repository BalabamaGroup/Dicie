package com.balabama.mt.dtos.user.guessBoo;

import com.balabama.mt.entities.user.guessBoo.GuessBooAnswer;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class GuessBooLogDto {

    private String question;
    private GuessBooAnswer answer;

}
