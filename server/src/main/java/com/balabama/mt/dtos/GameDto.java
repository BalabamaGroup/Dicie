package com.balabama.mt.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class GameDto {

    private Long id;
    private String name;
    private Integer minUsers;
    private Integer maxUsers;
}
