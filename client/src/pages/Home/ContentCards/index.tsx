import { useState } from 'react';
import { homeContentCards } from '@/common/constants';
import CreateRoomCard from './CreateRoomCard';
import * as Styled from './index.styled';
import JoinRoomCard from './JoinRoomCard';
import OrLabel from './OrLabel';

export interface HomeContentCardsProps {}

export default function ContentCards({}: HomeContentCardsProps) {
  const [selectedCard, setSelectedCard] = useState<string>(
    homeContentCards.DEFAULT
  );

  const onSelectCreateRoom = () => {
    setSelectedCard(homeContentCards.CREATE_ROOM);
  };

  const onSelectJoinRoom = () => {
    setSelectedCard(homeContentCards.JOIN_ROOM);
  };

  const onOrClick = () => {
    switch (selectedCard) {
      case homeContentCards.DEFAULT:
        break;

      case homeContentCards.CREATE_ROOM:
        onSelectJoinRoom();
        break;

      case homeContentCards.JOIN_ROOM:
        onSelectCreateRoom();
        break;
    }
  };

  return (
    <Styled.HomeContentCards selectedCard={selectedCard}>
      <CreateRoomCard
        selectedCard={selectedCard}
        onSelect={onSelectCreateRoom}
      />

      <OrLabel selectedCard={selectedCard} onOrClick={onOrClick} />

      <JoinRoomCard selectedCard={selectedCard} onSelect={onSelectJoinRoom} />
    </Styled.HomeContentCards>
  );
}
