import { User, UserInGame } from './user';

export type Room = {
  id: string;
  name: string;
  start: boolean;
  admin: User;
  users: User[];
};
export default Room;

export type Game = Omit<Room, 'users'> & {
  roomDataDto: GameSpecific;
  users: UserInGame[];
};

export type GameSpecific = GuessBooSpecific;

export type GuessBooSpecific = {
  currentQuestion: string | null;
  responseCounterYes: number;
  allUsersReady: boolean;
};
