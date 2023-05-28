--liquibase formatted sql

--changeset evgeniy.sharunov:MT-10
-- auto-generated definition
-- auto-generated definition

ALTER TABLE `user_memetaur_state`
    ADD COLUMN `count_win` INT(11) NOT NULL DEFAULT 0;
ALTER TABLE `room_memetaur_data`
    ADD COLUMN `current_round` INT(11) NOT NULL DEFAULT 1;
ALTER TABLE `room_memetaur_data`
    ADD COLUMN `all_users_vote_gif` bit not null default 0;
ALTER TABLE `room_memetaur_data` RENAME COLUMN `all_users_ready` to `all_users_select_gif`;