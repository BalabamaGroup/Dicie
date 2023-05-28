--liquibase formatted sql

--changeset evgeniy.sharunov:DICIE-6

UPDATE game set name = 'memetaur', game_type= 'MEMETAUR' where name = 'gifpacabra';
RENAME TABLE room_gifpacabra_data to room_memetaur_data;
RENAME TABLE user_gifpacabra_state to user_memetaur_state;
RENAME TABLE gifpacabra_phrase to memetaur_phrase;
