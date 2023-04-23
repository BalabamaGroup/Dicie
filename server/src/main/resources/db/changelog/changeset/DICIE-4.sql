--liquibase formatted sql

--changeset evgeniy.sharunov:DICIE-4
ALTER TABLE `room`
    ADD COLUMN `is_friend_mod` bit not null default false;
--rollback ALTER TABLE `room` DELETE COLUMN `is_friend_mod`;
