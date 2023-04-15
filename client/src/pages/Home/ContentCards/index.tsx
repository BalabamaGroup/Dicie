import { ReactEventHandler } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import routes from '@/common/constants/routes';
import useHomeStore from '@/stores/HomeStore';

import CreateRoomCard from './CreateRoom';
import * as Styled from './index.styled';
import JoinRoomCard from './JoinRoom';

export interface HomeContentCardsProps {}

export default function ContentCards({}: HomeContentCardsProps) {
  const navigate = useNavigate();
  let { card: selectedCard } = useParams();

  const isDefault =
    selectedCard !== 'createRoom' && selectedCard !== 'joinRoom';
  const isCreateRoomSelected = selectedCard === 'createRoom';
  const isJoinRoomSelected = selectedCard === 'joinRoom';

  const onSelectCreateRoom = (e: any) => {
    if (selectedCard === 'createRoom') return;
    e.preventDefault();
    navigate('/home/createRoom');
  };

  const onSelectJoinRoom = (e: any) => {
    if (selectedCard === 'joinRoom') return;
    e.preventDefault();
    navigate('/home/joinRoom');
  };

  return (
    <Styled.ContentCardsWrapper>
      <Styled.ContentCards selectedCard={selectedCard}>
        <CreateRoomCard
          isDefault={isDefault}
          isSelected={isCreateRoomSelected}
          onSelect={onSelectCreateRoom}
        />
        <JoinRoomCard
          isDefault={isDefault}
          isSelected={isJoinRoomSelected}
          onSelect={onSelectJoinRoom}
        />
      </Styled.ContentCards>
    </Styled.ContentCardsWrapper>
  );
}
