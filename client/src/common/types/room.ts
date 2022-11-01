import User from "./user";

type Room = {
  id: string;
  name: string;
  start: boolean;
  roomDataDto: {};
  users: Array<User>;
  admin: User;
};

export default Room;
