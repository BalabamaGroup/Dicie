import { request } from "..";
import { startGameRes } from "./interfaces";

export default class GameAPI {
  static startGame = (id: number): startGameRes => {
    const options = {
      method: "post",
      url: `room/start/${id}`,
    };

    return request(options).then((res: startGameRes) => res);
  };
}
