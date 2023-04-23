import { ReactSVG } from 'react-svg';

import Button from '@/components/Button';
import Input from '@/components/Input';
import RadioExtended from '@/components/RadioExtendend';
import Scroll from '@/components/Scroll';
import Toggle from '@/components/Toggle';

import * as Styled from './index.styled';

interface RoomSetupFormProps {
  onCreateRoom: React.MouseEventHandler<HTMLButtonElement>;
  canCreateRoom: boolean;
  canCompleteMobileSetup: boolean;

  roomName: string;
  onChangeRoomName: React.ChangeEventHandler<HTMLInputElement>;

  isPrivate: boolean;
  onChangeIsPrivate: React.MouseEventHandler<HTMLDivElement>;
  roomPassword: string;
  onChangeRoomPassword: React.ChangeEventHandler<HTMLInputElement>;

  isFriendMode: boolean;
  onChangeIsFriendMode: React.MouseEventHandler<HTMLDivElement>;

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
  isFriendMode,
  onChangeIsFriendMode,
  isWithCommuninactions,
  onChangeIsWithCommuninactions,
  selectedCommunicationOption,
  setSelectedCommunicationOption,
  isMobileSetupCompleted = false,
  onToggleIsMobileSetupCompleted,
}: RoomSetupFormProps) => {
  return (
    <Styled.SetupRoom
      className='setup-room'
      isMobileSetupCompleted={isMobileSetupCompleted}
    >
      <Styled.SetupRoomHeader>Set up your room</Styled.SetupRoomHeader>

      <Scroll color={'lime'} className='setup-room-form-scroll'>
        <Styled.SetupRoomForm>
          <Input
            id={'room-name'}
            color={'lime'}
            label='Room name'
            value={roomName}
            placeholder='Name'
            onChange={onChangeRoomName}
            size={'medium'}
            // icon='/images/svgs/eye.closed.svg'
          />

          <Styled.Option>
            <div className='main'>
              <Toggle
                className='main-toggle'
                value={isPrivate}
                onChange={onChangeIsPrivate}
                size={'medium'}
                color={'lime'}
              />
              <div className='main-text' onClick={onChangeIsPrivate}>
                Make room private
              </div>
            </div>

            {isPrivate && (
              <div className='settings'>
                <div className='settings-text'>
                  In order for other players to join this room, they will need
                  to enter the password you created
                </div>
                <Input
                  id={'room-name'}
                  color={'lime'}
                  className='settings-password'
                  value={roomPassword}
                  placeholder='Room password'
                  onChange={onChangeRoomPassword}
                  size={'medium'}
                />
              </div>
            )}
          </Styled.Option>

          <Styled.Option>
            <div className='main'>
              <Toggle
                className='main-toggle'
                value={isFriendMode}
                onChange={onChangeIsFriendMode}
                size={'medium'}
                color={'lime'}
              />
              <div className='main-text' onClick={onChangeIsFriendMode}>
                Friend Mode
              </div>
            </div>

            {isFriendMode && (
              <div className='settings'>
                <div className='settings-text'>
                  Friend mode implies that you will keep in contact with people
                  in the room using some other communication service, like
                  Discord or Zoom.
                </div>
              </div>
            )}
          </Styled.Option>

          {/* <Styled.Option>
            <div className='main'>
              <Toggle
                className='main-toggle'
                value={isWithCommuninactions}
                onChange={onChangeIsWithCommuninactions}
                size={'medium'}
                color={'lime'}
              />
              <div
                className='main-text'
                onClick={onChangeIsWithCommuninactions}
              >
                Enable in-game player communication
              </div>
            </div>

            {isWithCommuninactions && (
              <div className='settings'>
                <RadioExtended
                  color={'lime'}
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
                          src='/images/svgs/chat-messages.svg'
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
                          src='/images/svgs/volume-up.svg'
                        />
                      ),
                    },
                  ]}
                />
              </div>
            )}
          </Styled.Option> */}
        </Styled.SetupRoomForm>
      </Scroll>

      <Styled.ButtonWrapper isMobileSetupCompleted={isMobileSetupCompleted}>
        <Button
          color='lime'
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
          color='lime'
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
