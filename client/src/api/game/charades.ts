import { request } from '../';

export default class CharadesAPI {
  static selectUser = (id: number) => {
    const options = {
      method: 'post',
      url: `game_guess_boo/select_user/${id}`,
    };

    return request(options).then((res: Promise<void>) => res);
  };

  static setReady = async () => {
    const options = {
      method: 'post',
      url: `game_guess_boo/ready`,
    };

    return request(options).then((res: Promise<void>) => res);
  };

  static setWord = async (id: number, data: { word: string }) => {
    const options = {
      method: 'post',
      url: `game_guess_boo/set_word/${id}`,
      data,
    };

    return request(options).then((res: Promise<void>) => res);
  };

  static askQuestion = async (data: { question: string }) => {
    const options = {
      method: 'post',
      url: `game_guess_boo/ask_question`,
      data,
    };

    return request(options).then((res: Promise<void>) => res);
  };

  static answerQuestion = (data: { guessBooAnswer: string }) => {
    const options = {
      method: 'post',
      url: `game_guess_boo/answer`,
      data,
    };

    return request(options).then((res: Promise<void>) => res);
  };

  static acceptAnswer = async (): Promise<void> => {
    const options = {
      method: 'post',
      url: `game_guess_boo/accept_answer`,
    };

    return request(options).then((res: Promise<void>) => res);
  };

  static getHistory = async (
    id: number
  ): Promise<[{ question: string; answer: 'YES' | 'NO' | 'WTF' }]> => {
    const options = {
      method: 'get',
      url: `game_guess_boo/get_history/${id}`,
    };

    return request(options).then(
      (res: Promise<[{ question: string; answer: 'YES' | 'NO' | 'WTF' }]>) =>
        res
    );
  };

  static passTurnFM = async () => {
    const options = {
      method: 'post',
      url: `game_guess_boo/change_turn`,
    };

    return request(options).then((res: Promise<void>) => res);
  };

  static checkWord = async (data: { word: string }) => {
    const options = {
      method: 'post',
      url: `game_guess_boo/check_word`,
      data,
    };

    return request(options).then((res: Promise<void>) => res);
  };
}
