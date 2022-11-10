import { useState } from 'react';
import CharadesAPI from '../../../../../../api/game/charades';

interface AnswerQuestionProps {
  question: string | null;
}

const AnswerQuestion = ({ question }: AnswerQuestionProps) => {
  const onAnswerQuestion = (charadeAnswer: string) => {
    CharadesAPI.answerQuestion({ charadeAnswer });
  };

  return (
    <div>
      <div>{question}</div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button onClick={() => onAnswerQuestion('YES')}>Yes</button>
        <button onClick={() => onAnswerQuestion('NO')}>No</button>
        <button onClick={() => onAnswerQuestion('WTF')}>Wtf</button>
      </div>
    </div>
  );
};

export default AnswerQuestion;
