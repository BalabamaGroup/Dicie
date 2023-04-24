--liquibase formatted sql

--changeset evgeniy.sharunov:DICIE-7
CREATE TABLE `gifpacabra_phrase`
(
    `id`   bigint(20) NOT NULL AUTO_INCREMENT,
    phrase varchar(255) not null,
    PRIMARY KEY (`id`)
);
insert into game(game_type, id, max_users, min_users, name) value ('GIFPACABRA', 2, 10, 3, 'gifpacabra');
--rollback ALTER TABLE `room` RENAME COLUMN `is_friend_mode` to  `is_friend_mod`;
