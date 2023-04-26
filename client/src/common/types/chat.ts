export type ChatData = {
  messages: ChatMessage[];
  actions: ChatActions;
};

export type ChatMessage = {
  userId: number;
  username: string;
  text: string;
  special?: {
    game: 'guessBoo';
    guessBoo?: {
      answer: 'YES' | 'NO' | 'WTF';
    };
  };
};

export type ChatSpecialMessage = ChatMessage & {
  special: {
    game: 'guessBoo';
    guessBoo?: {
      answer: 'YES' | 'NO' | 'WTF';
    };
  };
};

export type ChatActions = {
  send: Function;
};
