import debounce from 'lodash.debounce';
import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  Navigate,
  Route,
  Routes as RoutesWrapper,
  useNavigate,
} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import GlobalQueries from './GlobalQueries';
import Routes from './common/constants/routes';
import Loader from './components/Loader';
import ToastContainer from './components/Toast/ToastContainer';
import Leaderboard from './pages/Leaderboard';
import VoiceChatTest from './pages/VoiceChatTest';
import useUserStore from './stores/UserStore';
import Theme from './styles/Theme';

const queryClient = new QueryClient();

const Auth = lazy(() => import('./pages/Auth'));
const Home = lazy(() => import('./pages/Home'));
const Room = lazy(() => import('./pages/Room'));

const Private = ({ children }: { children: any }) => {
  let user = useUserStore((s) => s.user);
  const isInitialLoaded = useUserStore((s) => s.isInitialLoaded);

  if (!isInitialLoaded) return <Loader.Circle />;
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

  useEffect(() => {
    const setVh = () =>
      document.documentElement.style.setProperty(
        '--vh100',
        `${window.innerHeight}px`
      );
    setVh();
    const handleResize = () => setVh();
    const debouncedHandleResize = debounce(handleResize, 500);
    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  if (isLoading) {
    return null;
  } else {
    const loaderElement = document.querySelector('#dom-loader');
    loaderElement && loaderElement.remove();
  }

  return (
    <div className='App'>
      <Theme>
        <QueryClientProvider client={queryClient}>
          <GlobalQueries />

          <Suspense fallback={<Loader.Circle />}>
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
                path={Routes.LEADERBOARD}
                element={
                  <Private>
                    <Leaderboard />
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
          </Suspense>

          <ToastContainer />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </Theme>
    </div>
  );
};

export default App;
