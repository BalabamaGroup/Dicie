import styled from 'styled-components';

export const PlayersCarouselWrapper = styled.div<{
  myTurn: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px 8px 20px;
  background-color: #000;
  width: 100%;
  border-radius: 24px;

  background: ${({ myTurn, theme }) =>
    !myTurn
      ? theme.guessBooGame.main.game.playersCarousel.backgroundWait
      : theme.guessBooGame.main.game.playersCarousel.backgroundGo};

  border: 1px solid
    ${({ myTurn, theme }) =>
      !myTurn
        ? theme.guessBooGame.main.game.playersCarousel.borderWait
        : theme.guessBooGame.main.game.playersCarousel.borderGo};
`;
