import styled from 'styled-components';

export const PlayersCarouselWrapper = styled.div<{
  myTurn: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px 16px 16px;
  background-color: #000;
  width: 100%;
  border-radius: 24px;

  background: ${({ myTurn, theme }) =>
    !myTurn
      ? theme.guessBooGame.main.game.playersCarousel.backgroundWait
      : theme.guessBooGame.main.game.playersCarousel.backgroundGo};

  border: 2px solid
    ${({ myTurn, theme }) =>
      !myTurn
        ? theme.guessBooGame.main.game.playersCarousel.borderWait
        : theme.guessBooGame.main.game.playersCarousel.borderGo};
`;
