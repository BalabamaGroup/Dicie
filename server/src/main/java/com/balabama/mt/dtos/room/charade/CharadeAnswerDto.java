package com.balabama.mt.dtos.room.charade;

import com.balabama.mt.entities.user.charade.CharadeAnswer;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class CharadeAnswerDto {

    private CharadeAnswer charadeAnswer;
}
