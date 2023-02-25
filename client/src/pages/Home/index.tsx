import { useState } from 'react';

import useCurrentUser from '@/shared/hooks/useCurrentUser';
import Loader from '@/shared/ui/Loader';
import NavBar from '@/shared/ui/NavBar';
import useCreateJoinRoomCards from '@/widgets/CreateJoinRoomCards/model/useCreateJoinRoomCards';
import CreateJoinRoomCards from '@/widgets/CreateJoinRoomCards/ui';

import * as Styled from './index.styled';

export interface HomeProps {}

const Home = ({}: HomeProps) => {
  const { isLoading: currentUserIsLoading } = useCurrentUser();

  const selectedCard = useCreateJoinRoomCards((state) => state.selectedCard);
  const isCreateRoom = useCreateJoinRoomCards((state) => state.isCreateRoom);
  const isJoinRoom = useCreateJoinRoomCards((state) => state.isJoinRoom);

  return (
    <Styled.HomePage selectedCard={selectedCard}>
      <NavBar
        textColor={isCreateRoom ? 'dark' : isJoinRoom ? 'light' : 'auto'}
      />
      <Styled.HomeContent>
        {currentUserIsLoading ? <Loader /> : <CreateJoinRoomCards />}
      </Styled.HomeContent>
    </Styled.HomePage>
  );
};

export default Home;
