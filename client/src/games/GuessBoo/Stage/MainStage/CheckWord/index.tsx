import { useState } from 'react';
import CharadesAPI from '@/api/game/charades';

const CheckWord = () => {
  const [finalWord, setFinalWord] = useState('');
  const onChangeFinalWord = (e: any) => setFinalWord(e.target.value);

  const onCheckWord = () => {
    CharadesAPI.checkWord({ word: finalWord });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
        marginLeft: 'auto',
      }}
    >
      Check your word!
      <input type='text' value={finalWord} onChange={onChangeFinalWord} />
      <button onClick={onCheckWord}>Submit</button>
    </div>
  );
};

export default CheckWord;
