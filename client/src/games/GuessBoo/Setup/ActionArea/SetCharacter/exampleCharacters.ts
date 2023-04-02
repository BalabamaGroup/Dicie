const examlpeCharacters = [
  'Snow White',
  'Snoopy',
  'Scooby Doo',
  'Anne Hathaway',
  'Madonna',
  'Superman',
  'Batman',
  'Robin',
  'George Washington',
  'Abraham Lincoln',
  'Thomas Edison',
  'Benjamin Franklin',
  'Brittany Spears',
  'Cinderella',
  'Sleeping Beauty',
  'Billy Joel',
  'Albert Einstein',
  'Richard Nixon',
  'Arnold Schwarzenegger',
  'Dora the Explorer',
  'Howard Stern',
  'Donald Trump',
  'Oprah Winfrey',
  'Helen of Troy',
  'Cleopatra',
  'Queen Elizabeth',
  'Angelina Jolie',
  'Bill Clinton',
  'Hillary Clinton',
  'George Clooney',
  'Martha Stewart',
  'Dennis Miller',
  'Michael Jackson',
  'Brad Pitt',
  'John Lennon',
  'Elvis',
  'Tom Sawyer',
  'Napoleon',
  'Cleopatra',
  'Joan of Arc',
  'SpongeBob',
  'Ellen DeGeneres',
  'Simon Cowell',
  'George Bush',
];

export const getRandomExampleCharacter = () => {
  return examlpeCharacters[
    Math.floor(Math.random() * examlpeCharacters.length)
  ];
};