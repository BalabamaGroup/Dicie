import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import RoomAPI from '@/api/room';

import useUserStore from '@/stores/UserStore';

import ChooseGame from './ChooseGame';
import SetupRoom from './SetupRoom';
import * as Styled from './index.styled';

interface CreateRoomCardProps {
  isSelected: boolean;
  isDefault: boolean;
  onSelect: React.ReactEventHandler<HTMLDivElement>;
}

const CreateRoomCard = ({
  isSelected,
  isDefault,
  onSelect,
}: CreateRoomCardProps) => {
  const navigate = useNavigate();

  const fetchUser = useUserStore((s) => s.fetchUser);

  const [roomName, setRoomName] = useState('');
  const onChangeRoomName = (e: any) => setRoomName(e.target.value);

  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const onChangeIsPrivate = () => setIsPrivate(!isPrivate);

  const [roomPassword, setRoomPassword] = useState('');
  const onChangeRoomPassword = (e: any) => setRoomPassword(e.target.value);

  const [isFriendMode, setIsFriendMode] = useState<boolean>(false);
  const onChangeIsFriendMode = () => setIsFriendMode(!isFriendMode);

  const [isWithCommuninactions, setIsWithCommuninactions] =
    useState<boolean>(false);
  const onChangeIsWithCommuninactions = () =>
    setIsWithCommuninactions(!isWithCommuninactions);

  const [selectedCommunicationOption, setSelectedCommunicationOption] =
    useState<string>('voice');

  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);
  const onSelectGame = (gameId: number) => {
    setSelectedGameId(gameId);
  };

  const [isMobileSetupCompleted, setIsMobileSetupCompleted] =
    useState<boolean>(false);
  const onToggleIsMobileSetupCompleted = () =>
    setIsMobileSetupCompleted(!isMobileSetupCompleted);

  const onCreateRoom = async () => {
    if (!canCreateRoom) return;

    const newRoom = await RoomAPI.createRoom({
      gameId: selectedGameId,
      name: roomName,
      password: roomPassword || null,
      isFriendMode: isFriendMode,
    });

    await fetchUser();

    navigate(`/room/${newRoom.id}`);
  };

  const canCreateRoom =
    !!roomName && !(isPrivate && !roomPassword) && !!selectedGameId;

  const canCompleteMobileSetup = !!roomName && !(isPrivate && !roomPassword);

  return (
    <Styled.CreateRoomCard
      isSelected={isSelected}
      isDefault={isDefault}
      onClick={onSelect}
    >
      <ReactSVG
        className='notselected-arrow'
        src='/images/svgs/arrow.left.svg'
      />
      <div className='on-default'>
        <div className='header main'>{`Create your \n own room`}</div>
        <div className='header sub'>And make others obey your will</div>
      </div>

      <Styled.CreateRoom
        className='on-selected'
        isMobileSetupCompleted={isMobileSetupCompleted}
      >
        <SetupRoom
          onCreateRoom={onCreateRoom}
          canCreateRoom={canCreateRoom}
          canCompleteMobileSetup={canCompleteMobileSetup}
          roomName={roomName}
          onChangeRoomName={onChangeRoomName}
          isPrivate={isPrivate}
          onChangeIsPrivate={onChangeIsPrivate}
          roomPassword={roomPassword}
          onChangeRoomPassword={onChangeRoomPassword}
          isFriendMode={isFriendMode}
          onChangeIsFriendMode={onChangeIsFriendMode}
          isWithCommuninactions={isWithCommuninactions}
          onChangeIsWithCommuninactions={onChangeIsWithCommuninactions}
          selectedCommunicationOption={selectedCommunicationOption}
          setSelectedCommunicationOption={setSelectedCommunicationOption}
          isMobileSetupCompleted={isMobileSetupCompleted}
          onToggleIsMobileSetupCompleted={onToggleIsMobileSetupCompleted}
        />
        <ChooseGame
          onCreateRoom={onCreateRoom}
          canCreateRoom={canCreateRoom}
          selectedGameId={selectedGameId}
          onSelectGame={onSelectGame}
          onToggleIsMobileSetupCompleted={onToggleIsMobileSetupCompleted}
        />
      </Styled.CreateRoom>
    </Styled.CreateRoomCard>
  );
};

export default CreateRoomCard;
