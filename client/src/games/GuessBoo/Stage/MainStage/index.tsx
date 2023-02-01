import { Game } from '@/shared/types/room';
import { UserInGame } from '@/shared/types/user';

import Player from '../../Player';
import CurrentUserPlayer from '../../Player/CurrentUserPlayer';
import AnswerQuestion from './AnswerQuestion';
import AnswerVisualizer from './AnswerVisualizer';
import AskQuestion from './AskQuestion';
import CheckWord from './CheckWord';
import QuestionTable from './QuestionTable';

interface MainStageProps {
  gameData: Game;
  currentUserPlayer: UserInGame;
  players: UserInGame[];
}

const MainStage = ({
  gameData,
  currentUserPlayer,
  players,
}: MainStageProps) => {
  const isMyTurn = currentUserPlayer.state.isGoing;
  const questionIsAsked = !!gameData.roomDataDto.currentQuestion;
  const iHaveAnsweredQuestion = !!currentUserPlayer.state.lastAnswer;
  const iHaveWon = currentUserPlayer.state.winRound;

  const [goingUser] = players.filter((player) => player.state.isGoing);

  return <></>;
};

export default MainStage;
