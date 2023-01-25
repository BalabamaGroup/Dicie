interface RoomSettingsProps {}
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import RoomAPI from '@/api/room';
import Button from '@/components/Button';
import Input from '@/components/Input';
import RadioExtended from '@/components/RadioExtendend';
import Toggle from '@/components/Toggle';

import * as Styled from './index.styled';

const RoomSettings = ({}: RoomSettingsProps) => {
  const { roomId } = useParams();

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

  const onStartGame = async () => roomId && (await RoomAPI.startGame(roomId));

  return (
    <Styled.RoomSettings>
      <Styled.RoomSettingsForm>
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
              <div className='room-password-form'>
                <Input
                  theme={'dark'}
                  id={'room-password'}
                  className='isprivate-settings-password'
                  value={roomPassword}
                  placeholder='Room password'
                  onChange={onChangeRoomPassword}
                  size={'medium'}
                />
                <Button
                  isPrimary
                  size={'medium'}
                  onClick={() => {}}
                  isDisabled={!roomPassword}
                >
                  Set password
                </Button>
              </div>
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
      </Styled.RoomSettingsForm>

      <Button
        isPrimary
        className={'start-game-button'}
        onClick={onStartGame}
        isScale
        size='large'
      >
        Start game
      </Button>
    </Styled.RoomSettings>
  );
};

export default RoomSettings;
