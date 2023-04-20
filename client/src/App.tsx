import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect, useRef, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  Navigate,
  Route,
  Routes as RoutesWrapper,
  useNavigate,
} from 'react-router-dom';

import Routes from './common/constants/routes';
import Loader from './components/Loader';
import ToastContainer from './components/Toast/ToastContainer';
import GlobalQueries from './GlobalQueries';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Room from './pages/Room';
import VoiceChatTest from './pages/VoiceChatTest';
import useUserStore from './stores/UserStore';
import Theme from './styles/Theme';

const queryClient = new QueryClient();

const Private = ({ children }: { children: any }) => {
  let user = useUserStore((s) => s.user);
  const isLoading = useUserStore((s) => s.isLoading);

  if (isLoading) return <Loader.Circle />;
  if (!user) return <Navigate to={Routes.SIGN_IN} replace />;
  return children;
};

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fakeRequest = () =>
      new Promise((resolve) => setTimeout((x: null) => resolve(x), 2500));
    fakeRequest().then(() => setIsLoading(false));
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  if (isLoading) {
    return null;
  } else {
    const loaderElement = document.querySelector('#dom-loader');
    loaderElement && loaderElement.remove();
  }

  document.documentElement.style.setProperty(
    '--vh100',
    `${window.innerHeight}px`
  );

  return (
    <Theme>
      <div className='App'>
        <QueryClientProvider client={queryClient}>
          <GlobalQueries />
          <RoutesWrapper>
            <Route path={Routes.SIGN_IN} element={<Auth />} />
            <Route path={Routes.SIGN_UP} element={<Auth />} />
            <Route
              path={Routes.HOME}
              element={
                <Private>
                  <Home />
                </Private>
              }
            />
            <Route
              path={Routes.ROOM}
              element={
                <Private>
                  <Room />
                </Private>
              }
            />
            <Route path={'/voicechat'} element={<VoiceChatTest />} />
            <Route path='*' element={<Navigate to={Routes.HOME} replace />} />
          </RoutesWrapper>
          <ToastContainer />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </div>
    </Theme>
  );
};

export default App;
