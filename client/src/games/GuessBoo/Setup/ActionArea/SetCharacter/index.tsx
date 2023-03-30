import { useState } from 'react';
import styled from 'styled-components';

import CharadesAPI from '@/api/game/charades';
import { UserInGame } from '@/common/types/user';
import Button from '@/components/Button';
import Input from '@/components/Input';

import { getRandomExampleCharacter } from './exampleCharacters';
import * as Styled from './index.styled';

interface SetCharacterProps {
  highlightedPlayer: UserInGame;
  setHighlightedPlayer: Function;
}

const SetCharacter = ({
  highlightedPlayer,
  setHighlightedPlayer,
}: SetCharacterProps) => {
  const [character, setCharacter] = useState<string>(
    highlightedPlayer.state.word || ''
  );
  const onChangeCharacter = (e: any) => setCharacter(e.target.value);

  const [example, setExample] = useState<string>(getRandomExampleCharacter());
  const onSetExample = () => {
    setCharacter(example);
    setExample(getRandomExampleCharacter());
  };

  const onSubmitCharacter = async () => {
    // setCharacterCache(character);
    setHighlightedPlayer({
      ...highlightedPlayer,
      state: { ...highlightedPlayer.state, word: character },
    });
    await CharadesAPI.setWord(highlightedPlayer.id, {
      word: character,
    });
    await CharadesAPI.setReady();
  };

  return (
    <Styled.SetCharacter>
      <Styled.FormWrapper>
        <div className='instruction'>
          {`Think of some character\nfor ${highlightedPlayer.username} and write it down`}
        </div>
        <Input
          className='input'
          size='large'
          color='lime'
          value={character}
          onChange={onChangeCharacter}
          placeholder={`Character for ${highlightedPlayer.username}`}
        />
        <div className='example'>
          Example: <span onClick={onSetExample}>{example}</span>
        </div>
      </Styled.FormWrapper>

      <Button
        size='large'
        color='lime'
        onClick={onSubmitCharacter}
        isPrimary
        isDisabled={!character}
        isScale
      >
        Submit
      </Button>
    </Styled.SetCharacter>
  );
};

export default SetCharacter;
