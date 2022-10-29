type User = {
  id: number;
  username: string;
  email: string;
  role: string;
  token?: string;
  roomId?: string;
  state?: {
    word?: string;
    isFinished?: boolean;
    ready?: boolean;
  };
};

export default User;
