--liquibase formatted sql

--changeset evgeniy.sharunov:MT-10
-- auto-generated definition
-- auto-generated definition

ALTER TABLE `user_memetaur_state`
    ADD COLUMN `is_going` bit not null default 0;