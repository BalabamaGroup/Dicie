import { ReactEventHandler } from 'react';

import CreateRoomCard from './CreateRoom';
import * as Styled from './index.styled';
import JoinRoomCard from './JoinRoom';

export interface HomeContentCardsProps {
  selectedCard: string;
  onSelectCreateRoom: ReactEventHandler<HTMLDivElement>;
  onSelectJoinRoom: ReactEventHandler<HTMLDivElement>;
}

export default function ContentCards({
  selectedCard,
  onSelectCreateRoom,
  onSelectJoinRoom,
}: HomeContentCardsProps) {
  return (
    <Styled.ContentCardsWrapper selectedCard={selectedCard}>
      <Styled.ContentCards selectedCard={selectedCard}>
        <CreateRoomCard
          selectedCard={selectedCard}
          onSelect={onSelectCreateRoom}
        />
        <JoinRoomCard selectedCard={selectedCard} onSelect={onSelectJoinRoom} />
      </Styled.ContentCards>
    </Styled.ContentCardsWrapper>
  );
}
