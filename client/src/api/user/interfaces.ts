export type basicUser = {
  id: number;
  username: string;
  email: string;
  role: string;
  roomId?: 1;
  state?: any;
};

export interface getUsersRes {
  [index: number]: {
    id: number;
    username: string;
    email: string;
    role: string;
  };
}

export interface getUserByIdRes {
  id: number;
  username: string;
  email: string;
  role: string;
}

export interface getCurrentUserRes {
  id: number;
  username: string;
  email: string;
  role: string;
}
