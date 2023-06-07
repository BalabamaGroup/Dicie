import { useRoomsQuery } from '@/GlobalQueries';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import RoomAPI from '@/api/room';

import { mobileAndSmaller } from '@/common/utils/device';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Toast from '@/components/Toast';

import useUserStore from '@/stores/UserStore';

export const StyledEnterPassword = styled.div<{}>`
  z-index: 10;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border-radius: 32px;

  background: ${({ theme }) =>
    theme.homePage.joinRoomCard.selected.alreadyInRoom.backdropRGBA};
  backdrop-filter: blur(12px);

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media ${mobileAndSmaller} {
    padding: 0;
  }

  .modal {
    max-width: 540px;
    padding: 20px;
    background: ${({ theme }) =>
      theme.homePage.joinRoomCard.selected.alreadyInRoom.background};
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    box-sizing: border-box;
    box-shadow: 0px 4px 8px 2px
      ${({ theme }) =>
        theme.homePage.joinRoomCard.selected.alreadyInRoom.shadowRGBA};

    .header {
      text-align: center;
      font-weight: 700;
      font-size: 24px;
      line-height: 24px;
      margin-bottom: 4px;
      color: ${({ theme }) => theme.homePage.joinRoomCard.alreadyInRoomText};
    }
    .body {
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      color: ${({ theme }) => theme.homePage.joinRoomCard.alreadyInRoomText};
      span {
        font-weight: 700;
        color: #8986f5;
      }
    }
    .footer {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 12px;
    }

    @media ${mobileAndSmaller} {
      width: 100%;
      height: 100%;
      padding: 32px 16px 16px 16px;
      .footer {
        margin-top: auto;
        gap: 8px;
      }
    }
  }
`;

interface EnterPasswordProps {
  roomId: string | null;
  onClose: { (): void };
}

const EnterPassword = ({ roomId, onClose }: EnterPasswordProps) => {
  const navigate = useNavigate();
  const fetchUser = useUserStore((s) => s.fetchUser);
  const user = useUserStore((s) => s.user);

  const [password, setPassword] = useState<string>('');
  const onChangePassword = (e: any) => setPassword(e.target.value);

  const onConnect = async () => {
    if (!roomId) return;
    try {
      await RoomAPI.connectToRoom(roomId, password);
      const newUser = user ? { ...user, roomId: roomId } : null;
      useUserStore.setState((s) => ({ ...s, user: newUser }));
      await fetchUser().then(() => {
        navigate(`/room/${roomId}`);
      });
    } catch (e) {
      Toast.error('Room is unavialable');
    }
    onClose();
  };

  return (
    <StyledEnterPassword>
      <div className='modal'>
        <div className='header'>Enter password</div>
        <div className='body'>
          This room is private and requires you to enter a password
          <br />
          <br />
          <Input
            color='indigo'
            value={password}
            onChange={onChangePassword}
            placeholder='Password'
          />
        </div>
        <div className='footer'>
          <Button
            size='medium'
            isScale
            color='indigo'
            isPrimary
            onClick={onConnect}
          >
            Connect
          </Button>
          <Button
            isPrimary
            type='danger'
            size='medium'
            isScale
            color='indigo'
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </StyledEnterPassword>
  );
};

export default EnterPassword;
