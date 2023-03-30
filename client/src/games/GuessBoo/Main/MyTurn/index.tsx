import { CharadesRoomDataDto } from '@/common/types/room';
import { UserInGame } from '@/common/types/user';

import AskGuessForm from './AskGuessForm';
import Conversation from './Conversation';
import * as Styled from './index.styled';

interface MyTurnProps {
  gameState: CharadesRoomDataDto;
  otherPlayers: UserInGame[];
}

const MyTurn = ({ gameState, otherPlayers }: MyTurnProps) => {
  return (
    <Styled.MyTurn>
      <Styled.MyTurnContentWrapper>
        {!gameState.currentQuestion ? (
          <Styled.AskGuessFormWrapper
            formSubmitted={!!gameState.currentQuestion}
          >
            <AskGuessForm />
          </Styled.AskGuessFormWrapper>
        ) : (
          <Styled.ReceivedAnswerWrapper
            formSubmitted={!!gameState.currentQuestion}
          >
            <Conversation
              otherPlayers={otherPlayers}
              currentQuestion={gameState.currentQuestion}
              responseConterYes={gameState.responseCounterYes}
            />
          </Styled.ReceivedAnswerWrapper>
        )}
      </Styled.MyTurnContentWrapper>
    </Styled.MyTurn>
  );
};

export default MyTurn;
