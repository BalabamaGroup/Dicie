import { useState } from 'react';
import styled from 'styled-components';

import { mobileAndSmaller } from '@/common/utils/device';
import Button from '@/components/Button';
import useGameStore from '@/stores/GameStore';

export const StyledWinGame = styled.div<{}>`
  z-index: 2;
  border-radius: 32px;
  position: absolute;
  background-color: black;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;

  background: ${({ theme }) =>
    theme.guessBooGame.main.game.winGame.backdropRGBA};
  backdrop-filter: blur(12px);

  .modal {
    max-width: 400px;
    padding: 20px;
    background: ${({ theme }) =>
      theme.homePage.joinRoomCard.alreadyInRoomBackground};
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    box-sizing: border-box;

    box-shadow: 0px 4px 8px 2px
      ${({ theme }) => theme.guessBooGame.main.game.winGame.shadowRGBA};

    .header {
      text-align: center;
      font-weight: 700;
      font-size: 32px;
      line-height: 32px;
      margin-bottom: 16px;
      color: ${({ theme }) => theme.homePage.joinRoomCard.alreadyInRoomText};
    }
    .body {
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      color: ${({ theme }) => theme.homePage.joinRoomCard.alreadyInRoomText};
      span {
        font-weight: 700;
        color: #8986f5;
      }
    }
    .footer {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 12px;
    }

    @media ${mobileAndSmaller} {
      width: 100%;
      height: 100%;
      padding: 32px 16px 16px 16px;
      .footer {
        margin-top: auto;
        gap: 8px;
      }
    }
  }
`;

interface WinGameProps {}

const WinGame = ({}: WinGameProps) => {
  const [hasAcceptedWin, setHasAcceptedWin] = useState<boolean>(false);
  const onAcceptWin = () => setHasAcceptedWin(true);

  const meHasWon = useGameStore((s) => s.getMePlayer().state.winRound);
  console.log(meHasWon, hasAcceptedWin);
  if (!meHasWon || hasAcceptedWin) return null;

  return (
    <StyledWinGame>
      <div className='modal'>
        <div className='header'>That's a win!</div>
        <div className='body'>
          Congrats, you've successfully guessed your character.
          <br />
          <br />
          But the game is not over yet, other players will need to guess theirs,
          and then rank points will be given to all players in the room
        </div>
        <div className='footer'>
          <Button color='indigo' isPrimary isScale onClick={onAcceptWin}>
            Continue
          </Button>
        </div>
      </div>
    </StyledWinGame>
  );
};

export default WinGame;
