import React from 'react';
import { ReactSVG } from 'react-svg';

import Input from '@/shared/ui/Input';
import RadioExtended from '@/shared/ui/RadioExtendend';
import Scroll from '@/shared/ui/Scroll';
import Toggle from '@/shared/ui/Toggle';

import * as Styled from './index.styled';

interface RoomSetupFormProps {
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
}

const RoomSetupForm = ({
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
}: RoomSetupFormProps) => {
  return (
    <Scroll className='setup-room-form-scroll'>
      <Styled.RoomSetupForm>
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
                In order for other players to join this room, they will need to
                enter the password you created
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
          )}
        </Styled.CommunicationsParam>
      </Styled.RoomSetupForm>
    </Scroll>
  );
};

export default RoomSetupForm;
