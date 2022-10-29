import { request } from "..";
import Room from "../../common/types/room";
import { createRoomData } from "./interfaces";

export default class RoomAPI {
  static createRoom = (data: createRoomData): Room => {
    const options = {
      method: "post",
      url: `room`,
      data,
    };

    return request(options).then((res: Room) => res);
  };

  static getRooms = (): [Room] => {
    const options = {
      method: "get",
      url: `room`,
    };

    return request(options).then((res: [Room]) => res);
  };

  static getRoom = (id: string): Room => {
    const options = {
      method: "get",
      url: `room/${id}`,
    };

    return request(options).then((res: Room) => res);
  };

  static connectToRoom = async (id: string): Promise<Room> => {
    const options = {
      method: "put",
      url: `room/connect/${id}`,
    };

    return request(options).then((res: Room) => res);
  };

  static disconnectFromRoom = (id: string): Room => {
    const options = {
      method: "put",
      url: `room/disconnect/${id}`,
    };

    return request(options).then((res: Room) => res);
  };

  static startGame = (id: string): Room => {
    const options = {
      method: "post",
      url: `room/start/${id}`,
    };

    return request(options).then((res: Room) => res);
  };

  static finishGame = (id: string): Room => {
    const options = {
      method: "post",
      url: `room/finish/${id}`,
    };

    return request(options).then((res: Room) => res);
  };

  static setSharadeWord = (id: number, data: { word: string }) => {
    const options = {
      method: "post",
      url: `game_charade/set_word/${id}`,
      data,
    };

    return request(options).then((res: Room) => res);
  };
}
