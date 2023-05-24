import { User, UserInGame } from './user';

export type Room = {
  id: string;
  name: string;
  gameId: number;
  start: boolean;
  admin: User;
  users: User[];
  isPrivate: boolean;
  isFriendMode: boolean;
};
export default Room;

export type RoomOutside = {
  id: string;
  name: string;
  gameId: number;
  numberOfUsers: number | null;
  start: boolean;
  admin: User;
};

export type Game = Omit<Room, 'users'> & {
  roomDataDto: GameSpecific;
  users: UserInGame[];
};

export type GameSpecific = GuessBooSpecific & MemetaurSpecific;

export type GuessBooSpecific = {
  currentQuestion: string | null;
  responseCounterYes: number;
  allUsersReady: boolean;
};

export type MemetaurSpecific = {
  allUsersReady: boolean;
  phrase: string;
};
