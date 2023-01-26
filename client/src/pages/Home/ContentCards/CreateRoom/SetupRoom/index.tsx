import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import RoomAPI from '@/api/room';
import Button from '@/components/Button';
import Input from '@/components/Input';
import RadioExtended from '@/components/RadioExtendend';
import Scroll from '@/components/Scroll';
import Toggle from '@/components/Toggle';

import * as Styled from './index.styled';

interface RoomSetupFormProps {
  isMobileSetupCompleted?: boolean;
  onToggleIsMobileSetupCompleted: React.MouseEventHandler<HTMLButtonElement>;
}

const SetupRoom = ({
  isMobileSetupCompleted = false,
  onToggleIsMobileSetupCompleted,
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
    <Styled.SetupRoom
      className='setup-room'
      isMobileSetupCompleted={isMobileSetupCompleted}
    >
      <Styled.SetupRoomHeader>Set up your room</Styled.SetupRoomHeader>

      <Scroll className='setup-room-form-scroll'>
        <Styled.SetupRoomForm>
          <Input
            id={'room-name'}
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
              />
              <div className='isprivate-main-text'>Make room private</div>
            </div>

            {isPrivate && (
              <div className='isprivate-settings'>
                <div className='isprivate-settings-text'>
                  In order for other players to join this room, they will need
                  to enter the password you created
                </div>
                <Input
                  id={'room-name'}
                  className='isprivate-settings-password'
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
      </Scroll>

      <Styled.ButtonWrapper isMobileSetupCompleted={isMobileSetupCompleted}>
        <Button
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
        >
          Choose game
        </Button>
      </Styled.ButtonWrapper>
    </Styled.SetupRoom>
  );
};

export default SetupRoom;
