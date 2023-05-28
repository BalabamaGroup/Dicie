import styled from 'styled-components';

import Loader from '@/components/Loader';
import Player from '@/components/Player';

import useGameStore from '@/stores/GameStore';

export const StyledOthersTurn = styled.div<{}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header {
    font-weight: 800;
    font-size: 28px;
    line-height: 28px;
    text-align: center;
    margin-top: 32px;
    color: ${({ theme }) =>
      theme.memetaurGame.game.captionSetup.othersTurn.textHeader};
  }

  .content {
    margin-top: auto;
    margin-bottom: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .wait-message {
      max-width: 240px;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      color: ${({ theme }) =>
        theme.memetaurGame.game.captionSetup.othersTurn.textWaitMessage};
    }
  }
`;

const OthersTurn = () => {
  const goingPlayer = useGameStore((s) => s.getGoingPlayer());

  return (
    <StyledOthersTurn>
      <div className='header'>It is {goingPlayer?.username}'s turn</div>
      <div className='content'>
        <Player
          id={goingPlayer.id}
          color='indigo'
          size='large'
          tileContent={{
            label: goingPlayer.username,
          }}
        />
        <div className='wait-message'>
          Wait for <span>{goingPlayer.username}</span> to create a caption for
          your future memes
        </div>
      </div>
    </StyledOthersTurn>
  );
};

export default OthersTurn;
