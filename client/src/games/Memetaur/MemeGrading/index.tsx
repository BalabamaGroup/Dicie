import Scroll from '@/components/Scroll';

import useGameStore from '@/stores/GameStore';

import Meme from './Meme';
import * as Styled from './index.styled';

interface MemeGradingProps {}

const MemeGrading = ({}: MemeGradingProps) => {
  const users = useGameStore((s) => s.data!.users);
  const phrase = useGameStore((s) => s.data!.roomDataDto.phrase);

  return (
    <Styled.MemeGrading>
      <Scroll className='meme-grading-scroll' color='indigo'>
        <div className='memes'>
          {users.map((user) => (
            <Meme caption={phrase} gif={user.state.gif} />
          ))}
        </div>
      </Scroll>
    </Styled.MemeGrading>
  );
};

export default MemeGrading;
