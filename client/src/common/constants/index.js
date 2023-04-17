export const Protocols = Object.freeze({
  DEFAULT: 'http://',
  SOCKET: 'ws://',
});

export const Ports = Object.freeze({
  DEFAULT: ':8080',
  CLIENT_DEV: ':3000',
});

export const RoleTypes = Object.freeze({
  USER: 'ROLE_USER',
  ADMIN: 'ROLE_ADMIN',
});

export const authFormViews = Object.freeze({
  SIGN_UP: 'SIGN_UP',
  SIGN_IN: 'SIGN_IN',
});

export const games = Object.freeze({
  GUESS_BOO: 1,
});

export const sidePanelViews = Object.freeze({
  Chat: 'chat',
  GuessBooAnswers: 'guessBooAnswers',
});
