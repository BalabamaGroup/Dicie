package com.balabama.mt.converters;

import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class UserDtoConverter extends BaseDtoConverter {


    public UserDtoConverter(ModelMapper modelMapper) {
        super(modelMapper);
    }

}
