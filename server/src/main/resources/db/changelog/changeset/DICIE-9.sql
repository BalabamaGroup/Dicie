--liquibase formatted sql

--changeset evgeniy.sharunov:MT-1
-- auto-generated definition
-- auto-generated definition

create table room_gifpacabra_data
(
    room_id              varchar(36) not null
        primary key,
    all_users_ready      bit null,
    phrase     varchar(255) null,
    constraint FK800z9j8lhpo0g2vofk8pvkkts
        foreign key (room_id) references room (id)
);

create table user_gifpacabra_state
(
    user_id       bigint not null
        primary key,
    gif          varchar(255) null,
    voted_gif          varchar(255) null,
    constraint FK_iiisvmjs0b0jrkeyik7wkd436
        foreign key (user_id) references user (id)
);

--rollback DROP TABlE user_gifpacabra_state;
--rollback DROP TABlE room_gifpacabra_data;