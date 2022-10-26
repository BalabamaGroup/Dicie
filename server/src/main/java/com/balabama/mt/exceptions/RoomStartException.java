package com.balabama.mt.exceptions;

import com.balabama.mt.entities.rooms.Room;
import java.util.UUID;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class RoomStartException extends ResponseStatusException {

    public RoomStartException(HttpStatus status) {
        super(status);
    }

    public RoomStartException(HttpStatus status, String reason) {
        super(status, reason);
    }

    public static RoomStartException alreadyRunning(UUID id) {
        return new RoomStartException(HttpStatus.BAD_REQUEST,
            "The room with id = " + id + " is already running");
    }

    public static RoomStartException gameNotSet(UUID id) {
        return new RoomStartException(HttpStatus.BAD_REQUEST,
            "The room with id = " + id + " cannot be started, because the game is not set");
    }

    public static RoomStartException usersLimit(Room room) {
        return new RoomStartException(HttpStatus.BAD_REQUEST,
            "The limit of users has been reached in room with id = " + room.getId() + ", there may be " + room.getGame().getMaxUsers()
                + " users in the game '" + room.getGame().getName() + "', and " + room.getUsers().size() + " in the room");
    }

    public static RoomStartException usersFew(Room room) {
        return new RoomStartException(HttpStatus.BAD_REQUEST,
            "There are few users to start room with id = " + room.getId() + ", you need at least " + room.getGame().getMinUsers()
                + " users to play '" + room.getGame().getName() + "', and now only " + room.getUsers().size());
    }
}