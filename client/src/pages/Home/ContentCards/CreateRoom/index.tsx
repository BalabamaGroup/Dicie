import { useState } from 'react';

import { homeContentCards } from '@/common/constants';

import ChooseGame from './ChooseGame';
import * as Styled from './index.styled';
import SetupRoom from './SetupRoom';

interface CreateRoomCardProps {
  selectedCard: string;
  onSelect: React.ReactEventHandler<HTMLDivElement>;
}

const CreateRoomCard = ({ selectedCard, onSelect }: CreateRoomCardProps) => {
  const [isMobileSetupCompleted, setIsMobileSetupCompleted] =
    useState<boolean>(false);

  const onToggleIsMobileSetupCompleted = () =>
    setIsMobileSetupCompleted(!isMobileSetupCompleted);

  return (
    <Styled.CreateRoomCard
      cardKey={homeContentCards.CREATE_ROOM}
      selectedCard={selectedCard}
      onClick={onSelect}
    >
      {selectedCard === homeContentCards.DEFAULT ? (
        <div>
          <div className='header main'>{`Create your \n own room`}</div>
          <div className='header sub'>And make others obey your will</div>
        </div>
      ) : (
        <Styled.CreateRoom isMobileSetupCompleted={isMobileSetupCompleted}>
          <SetupRoom
            isMobileSetupCompleted={isMobileSetupCompleted}
            onToggleIsMobileSetupCompleted={onToggleIsMobileSetupCompleted}
          />
          <ChooseGame
            onToggleIsMobileSetupCompleted={onToggleIsMobileSetupCompleted}
          />
        </Styled.CreateRoom>
      )}
    </Styled.CreateRoomCard>
  );
};

export default CreateRoomCard;
