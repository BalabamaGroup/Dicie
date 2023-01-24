import styled from 'styled-components';

import CharadesAPI from '@/api/game/charades';
import { UserInGame } from '@/common/types/user';
import Button from '@/components/Button';

import SetCharacter from './SetCharacter';

export const StyledSetReady = styled.div<{}>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const SetReady = ({ selectedUser }: { selectedUser: UserInGame }) => {
  const onReadyClick = () => CharadesAPI.setReady();

  return (
    <StyledSetReady>
      <SetCharacter selectedUser={selectedUser} />
      <Button
        size='large'
        className='ready-button'
        onClick={onReadyClick}
        isScale
      >
        I am ready
      </Button>
    </StyledSetReady>
  );
};

export default SetReady;
