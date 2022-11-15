import { ReactEventHandler } from 'react';

import CreateRoomCard from './CreateRoom';
import * as Styled from './index.styled';
import JoinRoomCard from './JoinRoom';
import OrLabel from './OrLabel';

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
  // const onOrClick = () => {
  //   switch (selectedCard) {
  //     case homeContentCards.DEFAULT:
  //       break;

  //     case homeContentCards.CREATE_ROOM:
  //       onSelectJoinRoom();
  //       break;

  //     case homeContentCards.JOIN_ROOM:
  //       onSelectCreateRoom();
  //       break;
  //   }
  // };

  return (
    <Styled.ContentCardsWrapper selectedCard={selectedCard}>
      <Styled.ContentCards selectedCard={selectedCard}>
        <CreateRoomCard
          selectedCard={selectedCard}
          onSelect={onSelectCreateRoom}
        />

        {/* <OrLabel selectedCard={selectedCard} onOrClick={onOrClick} /> */}

        <JoinRoomCard selectedCard={selectedCard} onSelect={onSelectJoinRoom} />
      </Styled.ContentCards>
    </Styled.ContentCardsWrapper>
  );
}
