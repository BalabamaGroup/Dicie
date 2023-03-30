import CharadesAPI from '@/api/game/charades';
import { UserInGame } from '@/common/types/user';
import Button from '@/components/Button';

import * as Styled from './index.styled';

interface SelectPlayerProps {
  highlightedPlayer: UserInGame | null;
}

const SelectPlayer = ({ highlightedPlayer }: SelectPlayerProps) => {
  const onSelectPlayer = () => {
    if (!highlightedPlayer) return;
    CharadesAPI.selectUser(highlightedPlayer.id);
  };

  return (
    <Styled.SelectPlayer>
      <Styled.SelectPlayerInstruction>
        Сhoose a player to whom you <br /> would like to write a character
      </Styled.SelectPlayerInstruction>

      <Styled.SelectPlayerConfirm isUserHighlighted={!!highlightedPlayer}>
        <div className='victim-label'>
          Your victim is <span>{highlightedPlayer?.username}</span>
        </div>
        <Button
          size='large'
          color='lime'
          onClick={onSelectPlayer}
          isPrimary
          isDisabled={!highlightedPlayer}
          isScale
        >
          Confirm
        </Button>
        <div className='warning'>
          Be careful, you can`&apos;t change this choice later
        </div>
      </Styled.SelectPlayerConfirm>
    </Styled.SelectPlayer>
  );
};

export default SelectPlayer;
