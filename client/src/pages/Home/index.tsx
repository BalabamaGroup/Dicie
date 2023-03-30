import { useState } from 'react';

import { homeContentCards } from '@/common/constants';
import Loader from '@/components/Loader';
import NavBar from '@/components/NavBar';
import useCurrentUser from '@/hooks/useCurrentUser';
import { useColorStore } from '@/stores/ColorStore';

import ContentCards from './ContentCards';
import * as Styled from './index.styled';

export interface HomeProps {}

const Home = ({}: HomeProps) => {
  const { isLoading: currentUserIsLoading } = useCurrentUser();

  const isWait = useColorStore((s) => s.color.home) === 'indigo';
  const setWait = useColorStore((s) => () => s.setWait('home'));
  const setGo = useColorStore((s) => () => s.setGo('home'));

  const [selectedCard, setSelectedCard] = useState<string>(
    homeContentCards.DEFAULT
  );

  const onSelectCreateRoom = (e: any) => {
    if (selectedCard === homeContentCards.CREATE_ROOM) return;
    e.preventDefault();
    setSelectedCard(homeContentCards.CREATE_ROOM);
    setGo();
  };

  const onSelectJoinRoom = (e: any) => {
    if (selectedCard === homeContentCards.JOIN_ROOM) return;
    e.preventDefault();
    setSelectedCard(homeContentCards.JOIN_ROOM);
    setWait();
  };

  return (
    <Styled.HomePage selectedCard={selectedCard}>
      <NavBar page='home' />
      <Styled.HomeContent>
        {currentUserIsLoading ? (
          <Loader.Circle />
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
