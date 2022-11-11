import { request } from '..';

export default class CharadesAPI {
  static selectUser = (id: number) => {
    const options = {
      method: 'post',
      url: `game_charade/select_user/${id}`,
    };

    request(options);
  };

  static setReady = () => {
    const options = {
      method: 'post',
      url: `game_charade/ready`,
    };

    request(options);
  };

  static setWord = (id: number, data: { word: string }) => {
    const options = {
      method: 'post',
      url: `game_charade/set_word/${id}`,
      data,
    };

    request(options);
  };

  static askQuestion = (data: { question: string }) => {
    const options = {
      method: 'post',
      url: `game_charade/ask_question`,
      data,
    };

    request(options);
  };

  static answerQuestion = (data: { charadeAnswer: string }) => {
    const options = {
      method: 'post',
      url: `game_charade/answer`,
      data,
    };

    request(options);
  };

  static acceptAnswer = async (): Promise<void> => {
    const options = {
      method: 'post',
      url: `game_charade/accept_answer`,
    };

    return request(options).then((res: Promise<void>) => res);
  };

  static getHistory = async (
    id: number
  ): Promise<[{ question: string; answer: 'YES' | 'NO' | 'WTF' }]> => {
    const options = {
      method: 'get',
      url: `game_charade/get_history/${id}`,
    };

    return request(options).then(
      (res: Promise<[{ question: string; answer: 'YES' | 'NO' | 'WTF' }]>) =>
        res
    );
  };

  static checkWord = (data: { word: string }) => {
    const options = {
      method: 'post',
      url: `game_charade/check_word`,
      data,
    };

    request(options);
  };
}
