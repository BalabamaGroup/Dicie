import useGameStore from '@/stores/GameStore';

import AskGuessForm from './AskGuessForm';
import Conversation from './Conversation';
import FriendMode from './FriendMode';
import * as Styled from './index.styled';

interface MyTurnProps {}

const MyTurn = ({}: MyTurnProps) => {
  const isFriendMode = useGameStore((s) => s.isFriendMode!);
  const gameSpecific = useGameStore((s) => s.specfic!);
  const otherPlayers = useGameStore((s) => s.getOtherPlayers());

  if (isFriendMode)
    return (
      <Styled.MyTurn>
        <Styled.MyTurnContentWrapper>
          <FriendMode />
        </Styled.MyTurnContentWrapper>
      </Styled.MyTurn>
    );

  return (
    <Styled.MyTurn>
      <Styled.MyTurnContentWrapper>
        {!gameSpecific.currentQuestion ? (
          <Styled.AskGuessFormWrapper
            formSubmitted={!!gameSpecific.currentQuestion}
          >
            <AskGuessForm />
          </Styled.AskGuessFormWrapper>
        ) : (
          <Styled.ReceivedAnswerWrapper
            formSubmitted={!!gameSpecific.currentQuestion}
          >
            <Conversation
              otherPlayers={otherPlayers}
              currentQuestion={gameSpecific.currentQuestion}
              responseConterYes={gameSpecific.responseCounterYes}
            />
          </Styled.ReceivedAnswerWrapper>
        )}
      </Styled.MyTurnContentWrapper>
    </Styled.MyTurn>
  );
};

export default MyTurn;
