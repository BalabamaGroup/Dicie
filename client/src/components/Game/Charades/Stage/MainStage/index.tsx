import { useState } from "react";
import CharadesAPI from "../../../../../api/game/charades";
import { Game } from "../../../../../common/types/room";
import { UserInGame } from "../../../../../common/types/user";
import Player from "../../Player";
import CurrentUserPlayer from "../../Player/CurrentUserPlayer";

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
  const [question, setQuestion] = useState("");
  const onChangeQuestion = (e: any) => setQuestion(e.target.value);

  const onAskQuestion = () => {
    CharadesAPI.askQuestion({ question });
  };

  const onAnsewerQuestion = (charadeAnswer: string) => {
    CharadesAPI.answerQuestion({ charadeAnswer });
  };

  const [goingUser] = players.filter((player) => player.state.isGoing);

  return (
    <div>
      <CurrentUserPlayer player={currentUserPlayer} />

      {currentUserPlayer.state.isGoing && (
        <>
          <input type="text" value={question} onChange={onChangeQuestion} />
          <button onClick={onAskQuestion}>Submit</button>
        </>
      )}

      {currentUserPlayer.id === goingUser?.state.selectedBy &&
        gameData.roomDataDto.currentQuestion && (
          <>
            <div>{gameData.roomDataDto.currentQuestion}</div>
            <button onClick={() => onAnsewerQuestion("YES")}>Yes</button>
            <button onClick={() => onAnsewerQuestion("NO")}>No</button>
            <button onClick={() => onAnsewerQuestion("WTF")}>Wtf</button>
          </>
        )}

      {players.map((player) => (
        <Player
          key={player.id}
          player={player}
          currentUserPlayer={currentUserPlayer}
        />
      ))}
    </div>
  );
};

export default MainStage;
