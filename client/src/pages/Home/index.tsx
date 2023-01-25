import { useState } from 'react';

import { homeContentCards } from '@/common/constants';
import Loader from '@/components/Loader';
import NavBar from '@/components/NavBar';
import useCurrentUser from '@/hooks/useCurrentUser';

import ContentCards from './ContentCards';
import * as Styled from './index.styled';

export interface HomeProps {}

const Home = ({}: HomeProps) => {
  // return <Loader />;

  const { isLoading: currentUserIsLoading } = useCurrentUser();

  const [selectedCard, setSelectedCard] = useState<string>(
    homeContentCards.DEFAULT
  );

  const onSelectCreateRoom = (e: any) => {
    if (selectedCard === homeContentCards.CREATE_ROOM) return;
    e.preventDefault();
    setSelectedCard(homeContentCards.CREATE_ROOM);
  };

  const onSelectJoinRoom = (e: any) => {
    if (selectedCard === homeContentCards.JOIN_ROOM) return;
    e.preventDefault();
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
        {currentUserIsLoading ? (
          <Loader />
        ) : (
          <ContentCards
            selectedCard={selectedCard}
            onSelectCreateRoom={onSelectCreateRoom}
            onSelectJoinRoom={onSelectJoinRoom}
          />
        )}
      </Styled.HomeContent>
    </Styled.HomePage>
  );
};

export default Home;
