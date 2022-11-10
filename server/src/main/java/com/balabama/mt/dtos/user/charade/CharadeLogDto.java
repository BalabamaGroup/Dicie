package com.balabama.mt.dtos.user.charade;

import com.balabama.mt.entities.user.charade.CharadeAnswer;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class CharadeLogDto {

    private String question;
    private CharadeAnswer answer;

}
