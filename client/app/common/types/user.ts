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
  username: string;
  email: string;
  role: string;
  roomId: string;
  state: UserCharadesState;
};

export type UserCharadesState = {
  word: string;
  ready: boolean;
  selectedUser: number;
  selectedBy: number;
  isGoing: boolean;
  isFinished: boolean;
};
