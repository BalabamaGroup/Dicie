type User = {
  id: number;
  username: string;
  email: string;
  role: string;
  token?: string;
  roomId?: 1;
  state?: any;
};

export default User;
