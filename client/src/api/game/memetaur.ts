import { request } from '../';

export default class MemetaurAPI {
  static setCaption = async (data: { word: string }): Promise<void> => {
    const options = {
      method: 'post',
      url: `game_gifpacabra/set_phrase`,
      data,
    };

    return request(options).then((res: Promise<void>) => res);
  };

  static idkwit = async (query: string): Promise<string> => {
    const options = {
      method: 'get',
      url: `game_gifpacabra/${query}`,
    };

    return request(options).then((res: Promise<string>) => res);
  };

  static getPresetCaptions = async (): Promise<string[]> => {
    const options = {
      method: 'get',
      url: `game_gifpacabra/default_phrases`,
    };

    return request(options).then((res: Promise<string[]>) => res);
  };
}
