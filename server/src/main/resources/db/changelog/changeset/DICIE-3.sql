--liquibase formatted sql

--changeset evgeniy.sharunov:DICIE-3
update game set min_users = 2 where game_type = 'CHARADE';
--rollback update game set min_users = 3 where game_type = 'CHARADE';
