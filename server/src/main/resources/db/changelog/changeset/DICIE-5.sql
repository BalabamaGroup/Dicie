--liquibase formatted sql

--changeset evgeniy.sharunov:DICIE-5
ALTER TABLE `user`
    ADD COLUMN `theme` INT(11) NOT NULL DEFAULT 0;
--rollback ALTER TABLE `user` DROP COLUMN `theme`;
