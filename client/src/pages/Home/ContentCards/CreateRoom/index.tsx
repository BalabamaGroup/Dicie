import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import RoomAPI from '@/api/room';
import { homeContentCards } from '@/common/constants';

import ChooseGame from './ChooseGame';
import * as Styled from './index.styled';
import SetupRoom from './SetupRoom';

interface CreateRoomCardProps {
  selectedCard: string;
  onSelect: React.ReactEventHandler<HTMLDivElement>;
}

const CreateRoomCard = ({ selectedCard, onSelect }: CreateRoomCardProps) => {
  const navigate = useNavigate();

  const [roomName, setRoomName] = useState('');
  const onChangeRoomName = (e: any) => setRoomName(e.target.value);

  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const onChangeIsPrivate = () => setIsPrivate(!isPrivate);

  const [roomPassword, setRoomPassword] = useState('');
  const onChangeRoomPassword = (e: any) => setRoomPassword(e.target.value);

  const [isWithCommuninactions, setIsWithCommuninactions] =
    useState<boolean>(false);
  const onChangeIsWithCommuninactions = () =>
    setIsWithCommuninactions(!isWithCommuninactions);

  const [selectedCommunicationOption, setSelectedCommunicationOption] =
    useState<string>('voice');

  const onCreateRoom = async () => {
    const newRoom = await RoomAPI.createRoom({ gameId: 1, name: roomName });
    navigate(`/room/${newRoom.id}`);
  };

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
            roomName={roomName}
            onChangeRoomName={onChangeRoomName}
            isPrivate={isPrivate}
            onChangeIsPrivate={onChangeIsPrivate}
            roomPassword={roomPassword}
            onChangeRoomPassword={onChangeRoomPassword}
            isWithCommuninactions={isWithCommuninactions}
            onChangeIsWithCommuninactions={onChangeIsWithCommuninactions}
            selectedCommunicationOption={selectedCommunicationOption}
            setSelectedCommunicationOption={setSelectedCommunicationOption}
            onCreateRoom={onCreateRoom}
            isMobileSetupCompleted={isMobileSetupCompleted}
            onToggleIsMobileSetupCompleted={onToggleIsMobileSetupCompleted}
          />
          <ChooseGame
            onCreateRoom={onCreateRoom}
            onToggleIsMobileSetupCompleted={onToggleIsMobileSetupCompleted}
          />
        </Styled.CreateRoom>
      )}
    </Styled.CreateRoomCard>
  );
};

export default CreateRoomCard;
