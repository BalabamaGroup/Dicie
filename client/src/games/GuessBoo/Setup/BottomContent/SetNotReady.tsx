import styled from 'styled-components';

import CharadesAPI from '@/api/game/charades';
import Button from '@/components/Button';

export const StyledSetNotReady = styled.div<{}>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const SetNotReady = ({}: {}) => {
  const onReadyClick = () => CharadesAPI.setReady();

  return (
    <StyledSetNotReady>
      <Button
        size='large'
        className='ready-button'
        onClick={onReadyClick}
        isScale
      >
        I'm not ready
      </Button>
    </StyledSetNotReady>
  );
};

export default SetNotReady;
