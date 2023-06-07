export type UserRole = 'ROLE_USER' | 'ROLE_ADMIN';

export type User = {
  id: number;
  username: string;
  email: string;
  token: string | null;
  role: UserRole;
  roomId: string | null;
  points: number;
};

export type UserInGame = User & {
  roomId: string;
  state: UserInGameState;
};

export type UserInGameState = UserGuessBooState & UserMemetaurState;

export type UserGuessBooState = {
  isGoing: boolean;
  ready: boolean;
  lastAnswer: 'YES' | 'NO' | 'WTF' | null;
  selectedBy: number | null;
  selectedUser: number | null;
  winRound: boolean;
  word: string | null;
};

export type UserMemetaurState = {
  gif: string;
  voted_gif: string;
  count_win: number;
};
