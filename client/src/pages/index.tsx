import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import routes from '@/shared/constants/routes';

import AuthPage from './Auth';
import HomePage from './Home';
import RoomPage from './Room';
import VoiceChatTestPage from './VoiceChatTest';

const Pages = () => {
  return (
    <Routes>
      <Route path={routes.SIGN_IN} element={<AuthPage />} />
      <Route path={routes.SIGN_UP} element={<AuthPage />} />

      <Route path={routes.HOME} element={<HomePage />} />

      <Route path={routes.ROOM} element={<RoomPage />} />

      <Route path={'/voicechat'} element={<VoiceChatTestPage />} />

      <Route path='*' element={<Navigate to={routes.HOME} replace />} />
    </Routes>
  );
};

export default Pages;
