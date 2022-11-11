import { useState } from 'react';
import CharadesAPI from '@/api/game/charades';

const AskQuestion = () => {
  const [question, setQuestion] = useState('');
  const onChangeQuestion = (e: any) => setQuestion(e.target.value);

  const onAskQuestion = () => {
    CharadesAPI.askQuestion({ question });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
      }}
    >
      Ask a question!
      <input type='text' value={question} onChange={onChangeQuestion} />
      <button onClick={onAskQuestion}>Submit</button>
    </div>
  );
};

export default AskQuestion;
