// !DEV

export const Protocols = Object.freeze({
  DEFAULT: 'http://',
  SOCKET: 'ws://',
});

// !BUILD

// export const Protocols = Object.freeze({
//   DEFAULT: 'https://',
//   SOCKET: 'wss://',
// });

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

export const games: {
  id: number;
  name: string;
  icon: string;
  minPlayers: number;
  maxPlayers: number;
}[] = [
  {
    id: 1,
    name: 'Guess BOO!',
    icon: '/images/svgs/game-icons/guess-boo.svg',
    minPlayers: 2,
    maxPlayers: 10,
  },
];

export const gameData = Object.freeze({
  1: {
    icon: '/images/svgs/game-icons/guess-boo.svg',
    minPlayers: 2,
    maxPlayers: 10,
  },
});

export const sidePanelViews = Object.freeze({
  Chat: 'chat',
  GuessBooAnswers: 'guessBooAnswers',
});
