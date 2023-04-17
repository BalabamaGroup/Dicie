import { ComponentColor } from '@/common/types/theme';
import { UserInGame } from '@/common/types/user';
import Carousel from '@/components/Carousel';
import Player from '@/components/Player';
import useWindowWidth from '@/hooks/useWindowWidth';
import useGameStore from '@/stores/GameStore';

import * as Styled from './index.styled';

interface PlayersCarouselProps {
  otherPlayers: UserInGame[];
}

const PlayersCarousel = ({ otherPlayers }: PlayersCarouselProps) => {
  const displayWidth = useWindowWidth(100);
  const color = useGameStore((s) => s.getColor());

  let maxWidth;
  if (displayWidth >= 1024) maxWidth = displayWidth - 528;
  else maxWidth = displayWidth - 176;

  return (
    <Styled.PlayersCarouselWrapper className='players-carousel'>
      <Carousel color={color} maxWidth={maxWidth} itemWidth={96} gap={16}>
        {[
          ...otherPlayers,
          ...otherPlayers,
          ...otherPlayers,
          ...otherPlayers,
          ...otherPlayers,
          ...otherPlayers,
        ].map((player, i) => (
          <Player
            size='medium'
            key={i}
            onClick={() => {
              return;
            }}
            form='tile'
            color='indigo'
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
