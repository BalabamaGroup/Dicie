type User = {
  id: number;
  username: string;
  email: string;
  role: string;
  token?: string;
  roomId?: string;
  state?: UserCharadesState;
};

export default User;

export type UserInGame = {
  id: number;
  points: number;
  username: string;
  email: string;
  role: string;
  roomId: string;
  state: UserCharadesState;
};

export type UserCharadesState = {
  isGoing: boolean;
  ready: boolean;
  lastAnswer: 'YES' | 'NO' | 'WTF' | null;
  selectedBy: number | null;
  selectedUser: number | null;
  winRound: boolean;
  word: string | null;
};
