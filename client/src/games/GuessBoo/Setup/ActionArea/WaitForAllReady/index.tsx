import styled from 'styled-components';

import CharadesAPI from '@/api/game/charades';
import Button from '@/components/Button';

export const StyledWaitForAllReady = styled.div<{}>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .instruction {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .instructon-text {
      font-size: 24px;
      line-height: 29px;
      font-weight: 800;
      text-align: center;
      color: ${({ theme }) =>
        theme.guessBooGame.setup.actionArea.intructionTextWait};

      span {
        font-weight: 900;
        line-height: 33px;
        color: ${({ theme }) =>
          theme.guessBooGame.setup.actionArea.intructionSpanTextWait};
      }
    }
  }
`;

interface WaitForAllReadyProps {}

const WaitForAllReady = ({}: WaitForAllReadyProps) => {
  const onReadyClick = () => CharadesAPI.setReady();

  return (
    <StyledWaitForAllReady>
      <div className='instruction'>
        <div className='instructon-text'>
          Wait for other players
          <br />
          and get ready to play
          <br />
          <span>Guess BOO!!</span>
        </div>
      </div>
      <Button
        color='indigo'
        size='large'
        onClick={onReadyClick}
        isPrimary
        isScale
      >
        I'm not ready
      </Button>
    </StyledWaitForAllReady>
  );
};

export default WaitForAllReady;
