import User from "../../common/types/user";

export interface createRoomData {
  gameId: number;
}

export interface createRoomRes {
  users: Array<User>;
  id: string;
}

export interface getRoomsRes {
  map(arg0: (room: any) => JSX.Element): import("react").ReactNode;
  [index: number]: {
    id: string;
    name: string;
    numberOfUsers: number;
    start: boolean;
    admin: User;
  };
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

export interface disconnectFromRoomRes {
  users: Array<User>;
  roomDataDto: {};
  start: boolean;
}
