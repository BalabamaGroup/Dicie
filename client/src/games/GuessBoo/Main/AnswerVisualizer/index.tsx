import useGameStore from '@/stores/GameStore';

import * as Styled from './index.styled';

interface AnswerVisualizerProps {}

const AnswerVisualizer = ({}: AnswerVisualizerProps) => {
  const myTurn = useGameStore((s) => s.myTurn);

  const mePlayer = useGameStore((s) => s.getMePlayer());
  const otherPlayers = useGameStore((s) => s.getOtherPlayers());
  const questionIsAsked = useGameStore(
    (s) => !!s.data?.roomDataDto.currentQuestion
  );

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
