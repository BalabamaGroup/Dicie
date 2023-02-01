import styled from 'styled-components';

import CharadesAPI from '@/shared/api/game/charades';
import { UserInGame } from '@/shared/types/user';
import Button from '@/shared/ui/Button';
import { mobileAndSmaller, tabletAndSmaller } from '@/shared/utils/device';

export const StyledConfirmUserSelection = styled.div<{}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  text-align: center;

  .message {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    span {
      font-weight: 800;
    }
  }

  @media ${tabletAndSmaller} {
    gap: 8px;
    max-width: 256px;
  }

  @media ${mobileAndSmaller} {
    flex-direction: row;
    gap: 12px;
    max-width: 100%;
  }
`;

const ConfirmUserSelection = ({
  highlightedUser,
}: {
  highlightedUser: UserInGame | undefined;
}) => {
  if (!highlightedUser) return null;

  const onSelectUser = () => CharadesAPI.selectUser(highlightedUser.id);

  return (
    <StyledConfirmUserSelection>
      <div key='text' className='message'>
        {`You've chosen player `}
        <span>{highlightedUser.username}</span>
      </div>
      <Button key='button' onClick={onSelectUser} isScale>
        Confirm
      </Button>
    </StyledConfirmUserSelection>
  );
};

export default ConfirmUserSelection;
