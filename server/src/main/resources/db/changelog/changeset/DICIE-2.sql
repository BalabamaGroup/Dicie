--liquibase formatted sql

--changeset evgeniy.sharunov:DICIE-2
CREATE TABLE `chat`
(
    room_id    varchar(36) not null
        primary key,
    `log` TEXT(65535) NULL DEFAULT NULL;
);
--rollback DROP TABLE `chat`;
