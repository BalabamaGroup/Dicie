export type ChatData = {
  messages: ChatMessage[];
  actions: ChatActions;
};

export type ChatMessage = {
  userId: number;
  username: string;
  text: string;
};

export type ChatActions = {
  send: Function;
};
