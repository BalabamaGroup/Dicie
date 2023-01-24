import styled from 'styled-components';

import CharadesAPI from '@/api/game/charades';
import Button from '@/components/Button';

export const StyledReadyButton = styled.div<{}>``;

const ReadyButton = ({ isReady }: { isReady: boolean }) => {
  const onReadyClick = () => CharadesAPI.setReady();

  return (
    <StyledReadyButton>
      <Button
        key='ready-button'
        className='ready-button'
        onClick={onReadyClick}
        isScale
      >
        {!isReady ? 'I am ready!' : " I'm not ready"}
      </Button>
    </StyledReadyButton>
  );
};

export default ReadyButton;
