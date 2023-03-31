import { useState } from 'react';

import CharadesAPI from '@/api/game/charades';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Switch from '@/components/Switch';

import * as Styled from './index.styled';

const AskGuessForm = () => {
  const [formType, setFormType] = useState<'question' | 'guess'>('question');
  const onSelectQuestion = () => setFormType('question');
  const onSelectGuess = () => setFormType('guess');
  const isQuestion = formType === 'question';

  const [inputValue, setInputValue] = useState<string>('');
  const onChangeInputValue = (e: any) => setInputValue(e.target.value);

  const onAskQuestion = async () => {
    let question = inputValue;
    if (!question.endsWith('?')) question = `${question}?`;
    question = question.charAt(0).toUpperCase() + question.slice(1);
    await CharadesAPI.askQuestion({ question });
  };

  const onCheckGuess = async () => {
    const word = inputValue;
    await CharadesAPI.checkWord({ word });
  };

  const onSubmit = async () => {
    await (isQuestion ? onAskQuestion() : onCheckGuess());
    setInputValue('');
    onSelectQuestion();
  };

  return (
    <Styled.AskGuessForm id='ask-guess-form'>
      <Styled.AskGuessHeader className='question-form-header'>
        {isQuestion ? (
          <div>
            Ask a <span>question</span> about your charater
          </div>
        ) : (
          <div>
            Try to <span>guess</span> your charater!
          </div>
        )}
      </Styled.AskGuessHeader>

      <Styled.SwitchInput className='question-form-switch-input'>
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
        <Input
          focusOnLoad
          color='lime'
          className='question-form-input'
          value={inputValue}
          onChange={onChangeInputValue}
          placeholder={isQuestion ? 'Write a question' : 'Write your guess'}
          size='large'
        />
      </Styled.SwitchInput>

      <Styled.ButtonWrapper isQuestion={isQuestion}>
        <div className='guess-waring'>
          Be careful, if the guess is wrong, you will skip a turn
        </div>
        <Button
          color='lime'
          className='question-form-button'
          isPrimary
          isScale
          size='large'
          onClick={onSubmit}
        >
          {isQuestion ? 'Ask' : 'Check'}
        </Button>
      </Styled.ButtonWrapper>
    </Styled.AskGuessForm>
  );
};

export default AskGuessForm;
