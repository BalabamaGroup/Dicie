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

  static acceptAnswer = () => {
    const options = {
      method: 'post',
      url: `game_charade/accept_answer`,
    };

    request(options);
  };

  static checkWord = (id: number, data: { word: string }) => {
    const options = {
      method: 'post',
      url: `game_charade/check_word/${id}`,
      data,
    };

    request(options);
  };
}
