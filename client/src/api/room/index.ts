import { request } from "..";
import { createRoomRes } from "./interfaces";

export default class RoomAPI {
  static createRoom = (): createRoomRes => {
    const options = {
      method: "post",
      url: `room`,
    };

    return request(options).then((res: createRoomRes) => res);
  };
}
