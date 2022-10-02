--liquibase formatted sql

--changeset evgeniy.sharunov:MT-1
CREATE TABLE `user`
(
    `id`   bigint(20) NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL UNIQUE,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `surname` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);
--rollback DROP TABlE user;