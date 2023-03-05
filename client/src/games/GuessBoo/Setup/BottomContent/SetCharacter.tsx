import { useState } from 'react';
import styled from 'styled-components';

import CharadesAPI from '@/api/game/charades';
import { UserInGame } from '@/common/types/user';
import { isDesktop, mobileAndSmaller, size, tabletAndSmaller } from '@/common/utils/device';
import Button from '@/components/Button';
import Input from '@/components/Input';
import useWindowWidth from '@/hooks/useWindowWidth';

export const StyledSetCharacter = styled.div<{}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;

  .submit-button {
    width: 100%;
  }

  .input {
    .input_input-wrapper {
      border-radius: 16px 16px 4px 4px;
    }
  }

  .submit-button {
    border-radius: 4px 4px 16px 16px;
  }

  @media ${tabletAndSmaller} {
    max-width: 256px;
  }

  @media ${mobileAndSmaller} {
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;

    .input {
      .input_input-wrapper {
        border-radius: 16px 4px 4px 16px;
      }
    }
    .submit-button {
      width: 128px;
      border-radius: 4px 16px 16px 4px;
    }
  }
`;

const SetCharacter = ({ selectedUser }: { selectedUser: UserInGame }) => {
  if (!selectedUser) return null;

  const [character, setCharacter] = useState<string>(
    selectedUser.state.word || ''
  );
  const [characterCache, setCharacterCache] = useState<string>('');
  const onChangeCharacter = (e: any) => setCharacter(e.target.value);

  const onSetCharacter = () => {
    setCharacterCache(character);
    CharadesAPI.setWord(selectedUser.id, {
      word: character,
    });
  };

  return (
    <StyledSetCharacter>
      <Input
        className='input'
        key='input'
        value={character}
        onChange={onChangeCharacter}
        placeholder={`Character for ${selectedUser.username}`}
      />
      <Button
        key='button'
        className='submit-button'
        onClick={onSetCharacter}
        isOutline
        isDisabled={!character || character === characterCache}
      >
        Submit
      </Button>
    </StyledSetCharacter>
  );
};

export default SetCharacter;
