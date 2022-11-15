import { useState } from 'react';

import { homeContentCards } from '@/common/constants';
import NavBar from '@/components/NavBar';

import ContentCards from './ContentCards';
import * as Styled from './index.styled';

export interface HomeProps {}

const Home = ({}: HomeProps) => {
  const [selectedCard, setSelectedCard] = useState<string>(
    homeContentCards.DEFAULT
  );

  const onSelectCreateRoom = () => {
    setSelectedCard(homeContentCards.CREATE_ROOM);
  };

  const onSelectJoinRoom = () => {
    setSelectedCard(homeContentCards.JOIN_ROOM);
  };

  return (
    <Styled.HomePage selectedCard={selectedCard}>
      <NavBar
        forsedTextColor={
          selectedCard === homeContentCards.CREATE_ROOM
            ? 'dark'
            : selectedCard === homeContentCards.JOIN_ROOM
            ? 'light'
            : undefined
        }
      />
      <Styled.HomeContent>
        <ContentCards
          selectedCard={selectedCard}
          onSelectCreateRoom={onSelectCreateRoom}
          onSelectJoinRoom={onSelectJoinRoom}
        />
      </Styled.HomeContent>
    </Styled.HomePage>
  );
};

export default Home;
