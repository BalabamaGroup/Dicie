import * as Styled from './index.styled';
import CharadesAPI from '@/api/game/charades';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Switch from '@/components/Switch';
import useKeyPressListener from '@/hooks/useKeyPressListener';
import { useState } from 'react';

const FriendMode = () => {
  const [formType, setFormType] = useState<'question' | 'guess'>('question');
  const onSelectQuestion = () => setFormType('question');
  const onSelectGuess = () => setFormType('guess');
  const isQuestion = formType === 'question';
  const isGuess = formType === 'guess';

  const [inputValue, setInputValue] = useState<string>('');
  const onChangeInputValue = (e: any) => setInputValue(e.target.value);

  const onPassTurn = async (e: any) => {
    console.log(e);
    if (e.target.nodeName.toLowerCase() === 'input') return;
    if (e.target.nodeName.toLowerCase() === 'textarea') return;
    if (isGuess) return;
    await CharadesAPI.passTurnFM();
  };

  const onCheckGuess = async () => {
    const word = inputValue;
    await CharadesAPI.checkWord({ word });
  };

  useKeyPressListener({
    keys: ['Space', ' '],
    onPress: onPassTurn,
  });

  return (
    <Styled.FriendMode>
      <Styled.FriendModeWrapper>
        <Switch
          color='lime'
          className='question-form-switch'
          options={[
            {
              id: 'question',
              label: 'Question',
              onClick: onSelectQuestion,
              defaultChoice: true,
            },
            {
              id: 'guess',
              label: 'Guess',
              onClick: onSelectGuess,
            },
          ]}
        />

        <Styled.InputWrapper isVisible={isGuess}>
          <Input
            focusOnLoad
            color='lime'
            className='question-form-input'
            value={inputValue}
            onChange={onChangeInputValue}
            placeholder={isQuestion ? 'Write a question' : 'Write your guess'}
            size='large'
          />
        </Styled.InputWrapper>

        <Styled.SpacePassTurnInstruction isVisible={isQuestion}>
          Press <span>Space</span> to pass your turn
        </Styled.SpacePassTurnInstruction>

        <Styled.WrongGuessWarning isVisible={isGuess}>
          Be careful, if your guess is wrong, you will skip your turn
        </Styled.WrongGuessWarning>

        <Button
          onClick={isQuestion ? onPassTurn : onCheckGuess}
          className='submit-button'
          size='large'
          isScale
          isPrimary
        >
          {isQuestion ? 'Pass Turn' : 'Guess'}
        </Button>
      </Styled.FriendModeWrapper>
    </Styled.FriendMode>
  );
};

export default FriendMode;
