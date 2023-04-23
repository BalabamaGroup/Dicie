--liquibase formatted sql

--changeset evgeniy.sharunov:DICIE-6
ALTER TABLE `room`
    RENAME COLUMN `is_friend_mod` to  `is_friend_mode`;
--rollback ALTER TABLE `room` RENAME COLUMN `is_friend_mode` to  `is_friend_mod`;
