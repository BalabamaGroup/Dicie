import { ComponentColor } from '@/common/types/theme';
import { UserInGame } from '@/common/types/user';
import Carousel from '@/components/Carousel';
import Player from '@/components/Player';
import useWindowWidth from '@/hooks/useWindowWidth';
import useGameStore from '@/stores/GameStore';
import useUserStore from '@/stores/UserStore';

import * as Styled from './index.styled';
import PlayerWithIndicator from './PlayerWithIndicator';

interface PlayersCarouselProps {}

const PlayersCarousel = ({}: PlayersCarouselProps) => {
  const displayWidth = useWindowWidth(100);

  const color = useGameStore((s) => s.getColor());
  const myTurn = useGameStore((s) => s.myTurn);

  const otherPlayers = useGameStore((s) => s.getOtherPlayers());
  const goingPlayer = useGameStore((s) => s.getGoingPlayer());

  let maxWidth;
  if (displayWidth >= 1024) maxWidth = displayWidth - 528;
  else maxWidth = displayWidth - 176;

  return (
    <Styled.PlayersCarouselWrapper className='players-carousel' myTurn={myTurn}>
      <Carousel color={color} maxWidth={maxWidth} itemWidth={108} gap={16}>
        {otherPlayers.map((player, i) => (
          <PlayerWithIndicator
            key={i}
            lastAnswer={player.state.lastAnswer}
            isHighlighted={goingPlayer.id === player.id}
            tileContent={{
              label: player.state.word,
              outsideLabel: player.username,
            }}
          />
        ))}
      </Carousel>
    </Styled.PlayersCarouselWrapper>
  );
};

export default PlayersCarousel;
