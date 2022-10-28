import { request } from "..";
import { connectToRoomRes, createRoomRes, getRoomRes } from "./interfaces";

export default class RoomAPI {
  static createRoom = (): createRoomRes => {
    const options = {
      method: "post",
      url: `room`,
    };

    return request(options).then((res: createRoomRes) => res);
  };

  static getRoom = (id: string): getRoomRes => {
    const options = {
      method: "get",
      url: `room/${id}`,
    };

    return request(options).then((res: getRoomRes) => res);
  };

  static connectToRoom = (id: string): connectToRoomRes => {
    const options = {
      method: "put",
      url: `room/connect/${id}`,
    };

    return request(options).then((res: connectToRoomRes) => res);
  };
}
