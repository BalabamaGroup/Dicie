import User from "../../common/types/user";

export interface createRoomRes {
  users: Array<User>;
}

export interface getRoomRes {
  users: Array<User>;
  roomDataDto: {};
  start: boolean;
}

export interface connectToRoomRes {
  users: Array<User>;
  roomDataDto: {};
  start: boolean;
}
