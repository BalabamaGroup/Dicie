import { Gif } from '@/common/types/gif';

import { request } from '../';

export default class MemetaurAPI {
  static getPresetCaptions = async (): Promise<string[]> => {
    const options = {
      method: 'get',
      url: `game_memetaur/default_phrases`,
    };

    return request(options).then((res: Promise<string[]>) => res);
  };

  static setCaption = async (data: { word: string }): Promise<void> => {
    const options = {
      method: 'post',
      url: `game_memetaur/set_phrase`,
      data,
    };

    return request(options).then((res: Promise<void>) => res);
  };

  static searchForGifs = async (data: { word: string }): Promise<Gif[]> => {
    const options = {
      method: 'put',
      url: `game_memetaur/search_gif`,
      data,
    };

    return request(options).then((res: Promise<Gif[]>) => res);
  };

  static selectGif = async (data: { word: string }): Promise<void> => {
    const options = {
      method: 'post',
      url: `game_memetaur/select_gif`,
      data,
    };

    return request(options).then((res: Promise<void>) => res);
  };

  static voteForGif = async (data: { word: string }): Promise<void> => {
    const options = {
      method: 'post',
      url: `game_memetaur/vote_gif`,
      data,
    };

    return request(options).then((res: Promise<void>) => res);
  };
}
