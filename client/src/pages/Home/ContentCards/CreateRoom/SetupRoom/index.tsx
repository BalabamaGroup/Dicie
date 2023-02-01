import { ReactSVG } from 'react-svg';

import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import RadioExtended from '@/shared/ui/RadioExtendend';
import Scroll from '@/shared/ui/Scroll';
import Toggle from '@/shared/ui/Toggle';

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
}: RoomSetupFormProps) => {
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
            label='Room name'
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
          </Styled.CommunicationsParam>
        </Styled.SetupRoomForm>
      </Scroll>

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
