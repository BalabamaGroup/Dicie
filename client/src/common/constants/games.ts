const games: {
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
  {
    id: 2,
    name: 'Meme-taur',
    icon: '/images/svgs/game-icons/gif.svg',
    minPlayers: 3,
    maxPlayers: 10,
  },
];

export default games;
