import { UserInGame } from '@/common/types/user';
import * as Styled from './index.styled';

interface CurrentUserPlayerProps {
  player: UserInGame;
}

const CurrentUserPlayer = ({ player }: CurrentUserPlayerProps) => {
  return (
    <Styled.CurrentUserPlayer>
      <div
        style={{
          background: 'gray',
          padding: '5px 20px',
        }}
      >
        {player.username}
      </div>
    </Styled.CurrentUserPlayer>
  );
};

export default CurrentUserPlayer;
