--liquibase formatted sql

--changeset evgeniy.sharunov:DICIE-6

UPDATE game set name = 'guessboo', game_type= 'GUESSBOO' where name = 'charade';
RENAME TABLE room_charade_data to room_guess_boo_data;
RENAME TABLE user_charade_state to user_guess_boo_state;
RENAME TABLE charade_log to guess_boo_log;
