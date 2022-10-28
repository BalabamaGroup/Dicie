package com.balabama.mt.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class MTException extends ResponseStatusException {

    public MTException(HttpStatus status) {
        super(status);
    }

    public MTException(HttpStatus status, String reason) {
        super(status, reason);
    }

    public MTException(HttpStatus status, String reason, Throwable cause) {
        super(status, reason, cause);
    }

    public MTException(int rawStatusCode, String reason, Throwable cause) {
        super(rawStatusCode, reason, cause);
    }

    public static <T, V> MTException notFoundById(Class<T> clazz, V value) {
        return notFound(clazz, value, "Id");
    }

    public static <T, V> MTException notFound(Class<T> clazz, V value, String field) {
        return new MTException(HttpStatus.NOT_FOUND, clazz.getSimpleName() + " with " + field + " = '" + value + "' does not exist.");
    }

    public static <T, V> MTException alreadyExistByName(Class<T> clazz, V value) {
        return alreadyExist(clazz, value, "Name");
    }

    public static <T, V> MTException alreadyExist(Class<T> clazz, V value, String field) {
        return new MTException(HttpStatus.BAD_REQUEST, clazz.getSimpleName() + " with " + field + " = '" + value + "' already exist.");
    }

    public static MTException forbidden() {
        return new MTException(HttpStatus.FORBIDDEN, "Only the administrator can do this");
    }

}
