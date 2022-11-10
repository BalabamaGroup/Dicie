--liquibase formatted sql

--changeset evgeniy.sharunov:MT-1
-- auto-generated definition
-- auto-generated definition
create table game
(
    game_type varchar(31) not null,
    id        bigint      not null
        primary key,
    max_users int null,
    min_users int null,
    name      varchar(255) null
);
create table room
(
    id        varchar(36)  not null
        primary key,
    max_users int null,
    min_users int null,
    name      varchar(255) not null,
    start     bit null,
    game      bigint null,
    constraint UK_aa58c9de9eu0v585le47w25my
        unique (name),
    constraint FKnfwcytp8m89dqetjy1x4en8d
        foreign key (game) references game (id)
);
create table room_data
(
    room_id varchar(36) not null
        primary key,
    constraint FKg5kf7d8lhpo0g2vofk8pvkkts
        foreign key (room_id) references room (id)
);

create table room_charade_data
(
    room_id              varchar(36) not null
        primary key,
    all_users_ready      bit null,
    current_question     varchar(255) null,
    response_counter_yes int not null default 0,
    round                int null not null default 0,
    constraint FK900z9j8lhpo0g2vofk8pvkkts
        foreign key (room_id) references room (id)
);
create table user
(
    id       bigint auto_increment
        primary key,
    email    varchar(255) null,
    password varchar(255) null,
    role     int null,
    username varchar(255) null,
    room     varchar(36) null,
    constraint FKh4vi8y500vhc3k8qy8o5t76u8
        foreign key (room) references room (id)
);

create table user_state
(
    user_id bigint not null
        primary key,
    constraint FKfo8ndsdie8fajd20rm9sknypp
        foreign key (user_id) references user (id)
);
create table user_charade_state
(
    user_id               bigint not null
        primary key,
    win_round             int null,
    is_going              bit    not null,
    ready                 bit    not null,
    word                  varchar(255) null,
    `last_answer`              INT(11) NULL DEFAULT 0,
    selected_user_user_id bigint null,
    constraint FK_riusvmjs0b0jrkeyik7wkd436
        foreign key (user_id) references user (id),
    constraint FKpubhbjwe1h9m3ehc8be7vio17
        foreign key (selected_user_user_id) references user_charade_state (user_id)
);

CREATE TABLE `charade_log`
(
    `id`       bigint(20) NOT NULL AUTO_INCREMENT,
    `answer`   INT(11) NULL DEFAULT 0,
    question   varchar(255) null,
    `state_user_id` BIGINT(20) NOT NULL,
    PRIMARY KEY (`id`),
    KEY        `FKrgw0AEQV19iBOVLJfcxoVpHxs` (`state_user_id`),
    CONSTRAINT `FKrgw0AEQV19iBOVLJfcxoVpHxs` FOREIGN KEY (`state_user_id`) REFERENCES `user_charade_state` (`user_id`)
);


insert into game(game_type, id, max_users, min_users, name) value ('CHARADE', 1, 10, 1, 'charade');
ALTER TABLE `room`
    ADD COLUMN `admin_id` bigint null, ADD KEY `FKzUiRVjCyIYturgw07fyiouOQI` (`admin_id`),
    ADD CONSTRAINT `FKzUiRVjCyIYturgw07fyiouOQI` FOREIGN KEY (`admin_id`) REFERENCES `user` (`id`);

--rollback DROP TABlE user;
--rollback DROP TABlE room;
--rollback DROP TABlE game;
