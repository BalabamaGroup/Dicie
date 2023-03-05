import { UserInGame } from '@/common/types/user';
import Carousel from '@/components/Carousel';
import Player from '@/components/Player';
import useWindowWidth from '@/hooks/useWindowWidth';

import * as Styled from './index.styled';

interface PlayersCarouselProps {
  otherPlayers: UserInGame[];
}

const PlayersCarousel = ({ otherPlayers }: PlayersCarouselProps) => {
  const displayWidth = useWindowWidth();

  return (
    <Styled.PlayersCarouselWrapper>
      <Carousel maxWidth={displayWidth - 528} itemWidth={96} gap={16}>
        {[
          ...otherPlayers,
          ...otherPlayers,
          ...otherPlayers,
          ...otherPlayers,
          ...otherPlayers,
          ...otherPlayers,
        ].map((player, i) => (
          <Player
            key={i}
            onClick={() => {}}
            label={player.state.word}
            outsideLabel={player.username}
          />
        ))}
      </Carousel>
    </Styled.PlayersCarouselWrapper>
  );
};

export default PlayersCarousel;
