import RoomSetupForm from '@/features/RoomSetupForm';
import Button from '@/shared/ui/Button';

import * as Styled from './index.styled';

interface SetupRoomProps {
  onCreateRoom: React.MouseEventHandler<HTMLButtonElement>;
  canCreateRoom: boolean;
  canCompleteMobileSetup: boolean;

  roomName: string;
  onChangeRoomName: React.ChangeEventHandler<HTMLInputElement>;

  isPrivate: boolean;
  onChangeIsPrivate: React.MouseEventHandler<HTMLDivElement>;
  roomPassword: string;
  onChangeRoomPassword: React.ChangeEventHandler<HTMLInputElement>;

  isWithCommuninactions: boolean;
  onChangeIsWithCommuninactions: React.MouseEventHandler<HTMLDivElement>;
  selectedCommunicationOption: string;
  setSelectedCommunicationOption: Function;

  isMobileSetupCompleted?: boolean;
  onToggleIsMobileSetupCompleted: React.MouseEventHandler<HTMLButtonElement>;
}

const SetupRoom = ({
  onCreateRoom,
  canCreateRoom,
  canCompleteMobileSetup,
  roomName,
  onChangeRoomName,
  isPrivate,
  onChangeIsPrivate,
  roomPassword,
  onChangeRoomPassword,
  isWithCommuninactions,
  onChangeIsWithCommuninactions,
  selectedCommunicationOption,
  setSelectedCommunicationOption,
  isMobileSetupCompleted = false,
  onToggleIsMobileSetupCompleted,
}: SetupRoomProps) => {
  return (
    <Styled.SetupRoom
      className='setup-room'
      isMobileSetupCompleted={isMobileSetupCompleted}
    >
      <Styled.SetupRoomHeader>Set up your room</Styled.SetupRoomHeader>

      <RoomSetupForm
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
      />

      <Styled.ButtonWrapper isMobileSetupCompleted={isMobileSetupCompleted}>
        <Button
          isDisabled={!canCreateRoom}
          className='create-room-button'
          isPrimary
          isScale
          onClick={onCreateRoom}
          size='large'
        >
          Create room
        </Button>
        <Button
          className='choose-game-button'
          isPrimary
          isScale
          onClick={onToggleIsMobileSetupCompleted}
          size='large'
          isDisabled={!canCompleteMobileSetup}
        >
          Choose game
        </Button>
      </Styled.ButtonWrapper>
    </Styled.SetupRoom>
  );
};

export default SetupRoom;
