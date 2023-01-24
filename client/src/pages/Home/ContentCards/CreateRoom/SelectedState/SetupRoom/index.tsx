import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import RoomAPI from '@/api/room';
import Button from '@/components/Button';
import Input from '@/components/Input';
import RadioExtended from '@/components/RadioExtendend';
import Toggle from '@/components/Toggle';

import * as Styled from './index.styled';

interface RoomSetupFormProps {
  isMobileView?: boolean;
  onToggleSetupFormCompleted?: React.MouseEventHandler<HTMLButtonElement>;
}

const RoomSetupForm = ({
  isMobileView = false,
  onToggleSetupFormCompleted,
}: RoomSetupFormProps) => {
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

  return (
    <Styled.SetupRoomWrapper isMobileView={isMobileView}>
      <Styled.SetupRoomHeader>Set up your room</Styled.SetupRoomHeader>

      <Styled.SetupRoomForm>
        <Input
          id={'room-name'}
          theme='dark'
          value={roomName}
          placeholder='Name'
          onChange={onChangeRoomName}
          size={'medium'}
        />

        <Styled.MakePrivateParam className='isprivate'>
          <div className='isprivate-main'>
            <Toggle
              className='isprivate-main-toggle'
              value={isPrivate}
              onChange={onChangeIsPrivate}
              size={'medium'}
              theme={'dark'}
            />
            <div className='isprivate-main-text'>Make room private</div>
          </div>

          {isPrivate && (
            <div className='isprivate-settings'>
              <div className='isprivate-settings-text'>
                In order for other players to join this room, they will need to
                enter the password you created
              </div>
              <Input
                id={'room-name'}
                className='isprivate-settings-password'
                theme='dark'
                value={roomPassword}
                placeholder='Room password'
                onChange={onChangeRoomPassword}
                size={'medium'}
              />
            </div>
          )}
        </Styled.MakePrivateParam>

        <Styled.CommunicationsParam className='communications'>
          <div className='communications-main'>
            <Toggle
              className='communications-main-toggle'
              value={isWithCommuninactions}
              onChange={onChangeIsWithCommuninactions}
              size={'medium'}
              theme={'dark'}
            />
            <div className='communications-main-text'>
              Enable in-game player communication
            </div>
          </div>

          {isWithCommuninactions && (
            <div className='communications-settings'>
              <RadioExtended
                className={'communications-settings-radio'}
                selectedOptionId={selectedCommunicationOption}
                options={[
                  {
                    id: 'text',
                    label: 'Text chat',
                    onSelect: () => setSelectedCommunicationOption('text'),
                    content: (
                      <ReactSVG
                        className='communications-settings-radio-icon'
                        src='/images/svgs/create-room-communucation-chat.svg'
                      />
                    ),
                  },
                  {
                    id: 'voice',
                    label: 'Voice chat',
                    onSelect: () => setSelectedCommunicationOption('voice'),
                    content: (
                      <ReactSVG
                        className='communications-settings-radio-icon'
                        src='/images/svgs/create-room-communucation-voice.svg'
                      />
                    ),
                  },
                ]}
              />
            </div>
          )}
        </Styled.CommunicationsParam>
      </Styled.SetupRoomForm>

      <Styled.ButtonWrapper>
        {isMobileView && onToggleSetupFormCompleted ? (
          <Button
            isPrimary
            isScale
            theme='dark'
            onClick={onToggleSetupFormCompleted}
            size='large'
          >
            Choose game
          </Button>
        ) : (
          <Button
            isPrimary
            isScale
            theme='dark'
            onClick={onCreateRoom}
            size='large'
          >
            Create room
          </Button>
        )}
      </Styled.ButtonWrapper>
    </Styled.SetupRoomWrapper>
  );
};

export default RoomSetupForm;
