import Room, { RoomOutside } from '@/common/types/room';

import { request } from '../';

export default class RoomAPI {
  static createRoom = (data: {
    gameId: number;
    name: string;
    password: string | null;
    isFriendMode: boolean;
  }): Promise<Room> => {
    const options = {
      method: 'post',
      url: `room`,
      data,
    };

    return request(options).then((res: Promise<Room>) => res);
  };

  static getRooms = async (): Promise<[RoomOutside]> => {
    const options = {
      method: 'get',
      url: `room`,
    };

    return request(options).then((res: Promise<[RoomOutside]>) => res);
  };

  static getRoom = async (id: string): Promise<Room> => {
    const options = {
      method: 'get',
      url: `room/${id}`,
    };

    return request(options).then((res: Promise<Room>) => res);
  };

  static connectToRoom = async (id: string): Promise<Room> => {
    const options = {
      method: 'put',
      url: `room/connect/${id}`,
      data: { password: null },
    };

    return request(options).then((res: Promise<Room>) => res);
  };

  static disconnectFromRoom = (id: string): Promise<Room> => {
    const options = {
      method: 'put',
      url: `room/disconnect/${id}`,
    };

    return request(options).then((res: Promise<Room>) => res);
  };

  static startGame = (id: string): Promise<Room> => {
    const options = {
      method: 'post',
      url: `room/start/${id}`,
    };

    return request(options).then((res: Promise<Room>) => res);
  };

  static finishGame = (id: string): Promise<Room> => {
    const options = {
      method: 'post',
      url: `room/finish/${id}`,
    };

    return request(options).then((res: Promise<Room>) => res);
  };
}
