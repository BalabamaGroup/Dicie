import styled from 'styled-components';

export const RoomUsers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 64px;
  box-sizing: border-box;
  width: 50%;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;

  .avatar {
    height: 96px;
    width: 96px;
    min-width: 96px;
    background: linear-gradient(178.62deg, #8986f5 0%, #be86f5 100%);
    border-radius: 32px;
  }

  .username {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
`;
