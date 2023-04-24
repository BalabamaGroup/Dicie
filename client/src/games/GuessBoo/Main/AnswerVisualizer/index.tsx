import CharadesAPI from '@/api/game/charades';
import { UserInGame } from '@/common/types/user';
import useColorStore from '@/stores/ColorStore';
import useGameStore from '@/stores/GameStore';

import * as Styled from './index.styled';

interface AnswerVisualizerProps {
  otherPlayers: UserInGame[];
  mePlayer: UserInGame;
  questionIsAsked: boolean;
}

const AnswerVisualizer = ({
  otherPlayers,
  mePlayer,
  questionIsAsked,
}: AnswerVisualizerProps) => {
  const myTurn = useGameStore((s) => s.myTurn);

  if (!questionIsAsked) return <Styled.NoQuestion />;

  const answerData = { YES: 0, NO: 0, WTF: 0, count: 0 };
  [mePlayer, ...otherPlayers].forEach((player) => {
    if (player.state.lastAnswer) {
      answerData[player.state.lastAnswer]++;
      answerData.count++;
    }
  });

  const yesPercent = (answerData.YES * 100) / otherPlayers.length;
  const noPercent = (answerData.NO * 100) / otherPlayers.length;
  const wtfPercent = (answerData.WTF * 100) / otherPlayers.length;
  const emptyPercent =
    (100 / otherPlayers.length) * (otherPlayers.length - answerData.count);

  return (
    <Styled.AnswerVisualizer>
      <Styled.YesBar
        myTurn={myTurn}
        width={yesPercent}
        isFirst
        isLast={!noPercent && !wtfPercent && !emptyPercent}
      />
      <Styled.NoBar
        myTurn={myTurn}
        width={noPercent}
        isFirst={!yesPercent}
        isLast={!wtfPercent && !emptyPercent}
      />
      <Styled.WtfBar
        myTurn={myTurn}
        width={wtfPercent}
        isFirst={!yesPercent && !noPercent}
        isLast={!emptyPercent}
      />
      <Styled.EmptyBar
        myTurn={myTurn}
        width={emptyPercent}
        isFirst={!yesPercent && !noPercent && !wtfPercent}
        isLast
      />
    </Styled.AnswerVisualizer>
  );
};

export default AnswerVisualizer;
