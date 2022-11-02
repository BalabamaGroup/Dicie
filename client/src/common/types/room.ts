import User, { UserInGame } from "./user";

type Room = {
  id: string;
  name: string;
  start: boolean;

  admin: User;
  users: User[];
};
export default Room;

export type Game = {
  id: string;
  name: string;
  start: boolean;
  roomDataDto: CharadesRoomDataDto;
  admin: User;
  users: UserInGame[];
};

export type CharadesRoomDataDto = {
  currentQuestion: string | null;
  responseCounterYes: number;
  allUsersReady: boolean;
};
