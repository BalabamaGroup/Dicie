import { useState } from 'react';

import CharadesAPI from '@/shared/api/game/charades';
import { UserInGame } from '@/shared/types/user';

interface AnswerVisualizerProps {
  players: UserInGame[];
}

const AnswerVisualizer = ({ players }: AnswerVisualizerProps) => {
  const calculateAnswerData = () => {
    const result = { YES: 0, NO: 0, WTF: 0, count: 0 };
    players.forEach((player) => {
      if (player.state.lastAnswer) {
        result[player.state.lastAnswer]++;
        result.count++;
      }
    });

    return result;
  };

  const answerData = calculateAnswerData();

  const onAcceptAnswer = async () => {
    await CharadesAPI.acceptAnswer();
    const event = new CustomEvent('answerAccept');
    window.dispatchEvent(event);
  };

  return (
    <div
      style={{
        height: '50px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
        }}
      >
        <div
          style={{
            width: `${(answerData.YES * 100) / players.length}%`,
            height: '100%',
            background: 'green',
          }}
        ></div>
        <div
          style={{
            width: `${(answerData.NO * 100) / players.length}%`,
            height: '100%',
            background: 'red',
          }}
        ></div>
        <div
          style={{
            width: `${(answerData.WTF * 100) / players.length}%`,
            height: '100%',
            background: 'grey',
          }}
        ></div>
        <div
          style={{
            width: `${
              (100 / players.length) * (players.length - answerData.count)
            }%`,
            height: '100%',
            background: 'lightgray',
          }}
        />
      </div>
      {answerData.count === players.length && (
        <div onClick={onAcceptAnswer}>
          <button>Accept answer</button>
        </div>
      )}
    </div>
  );
};

export default AnswerVisualizer;
