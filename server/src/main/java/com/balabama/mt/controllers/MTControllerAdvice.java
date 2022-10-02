package com.balabama.mt.controllers;

import com.balabama.mt.exceptions.MTException;
import javax.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@Slf4j
@ControllerAdvice(basePackageClasses = UserController.class)
public class MTControllerAdvice {

    @ExceptionHandler(MTException.class)
    @ResponseBody
    ResponseEntity<?> handleControllerException(HttpServletRequest request, MTException ex) {
        log.warn("Exception during request {}: {}, {}", request.getRequestURI(), ex.getHttpStatus(), ex.getErrorMessage());
        return new ResponseEntity<>(ex.getErrorMessage(), ex.getHttpStatus());
    }
}
