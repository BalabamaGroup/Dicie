package com.balabama.mt.controllers;

import com.balabama.mt.exceptions.ExceptionDto;
import com.balabama.mt.exceptions.MTException;
import javax.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.server.ResponseStatusException;

@Slf4j
@ControllerAdvice(basePackageClasses = UserController.class)
public class MTControllerAdvice {

    @ExceptionHandler(ResponseStatusException.class)
    @ResponseBody
    ResponseEntity<?> handleControllerException(HttpServletRequest request, ResponseStatusException ex) {
        log.warn("Exception during request {}: {}, {}", request.getRequestURI(), ex.getStatus(), ex.getMessage());
        return new ResponseEntity<>(new ExceptionDto(ex.getReason()), ex.getStatus());
    }
}
