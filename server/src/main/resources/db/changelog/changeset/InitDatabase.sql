--liquibase formatted sql

--changeset evgeniy.sharunov:MT-1
-- auto-generated definition
-- auto-generated definition
create table game
(
    game_type varchar(31)  not null,
    id        bigint       not null
        primary key,
    max_users int          null,
    min_users int          null,
    name      varchar(255) null
);
create table room
(
    id           bigint auto_increment
        primary key,
    max_users    int null,
    min_users    int null,
    is_finished  bit null,
    user_turn_id bigint null,
    game         bigint null,
    constraint FKnfwcytp8m89dqetjy1x4en8d
        foreign key (game) references game (id)
);
create table room_data
(
    room_id bigint not null
        primary key,
    constraint FKg5kf7d8lhpo0g2vofk8pvkkts
        foreign key (room_id) references room (id)
);

create table room_charade_data
(
    room_id bigint not null
        primary key,
    constraint FK900z9j8lhpo0g2vofk8pvkkts
        foreign key (room_id) references room (id)
);
create table user
(
    id       bigint auto_increment
        primary key,
    email    varchar(255) null,
    password varchar(255) null,
    role     int          null,
    username varchar(255) null,
    room     bigint       null,
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
    user_id     bigint not null
        primary key,
    is_finished bit null,
    word        varchar(255) null,
    constraint FK_riusvmjs0b0jrkeyik7wkd436
        foreign key (user_id) references user (id)
);

insert into game(game_type,id, max_users, min_users, name) value ('CHARADE', 1, 10, 1, 'charade')
--rollback DROP TABlE user;
--rollback DROP TABlE room;
--rollback DROP TABlE game;
