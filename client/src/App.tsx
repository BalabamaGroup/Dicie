import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Navigate, Route, Routes as RoutesRRD } from 'react-router-dom';

import Routes from './common/constants/routes';
import ToastContainer from './components/Toast/ToastContainer';
import About from './pages/About';
import Auth from './pages/Auth';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Room from './pages/Room';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <div className='App'>
        <QueryClientProvider client={queryClient}>
          <RoutesRRD>
            <Route path={Routes.SIGN_IN} element={<Auth />} />
            <Route path={Routes.SIGN_UP} element={<Auth />} />
            <Route path={Routes.HOME} element={<Home />} />
            <Route path={Routes.ABOUT} element={<About />} />
            <Route path={Routes.CONTACT} element={<Contact />} />
            <Route path={Routes.ROOM} element={<Room />} />
            <Route path='*' element={<Navigate to={Routes.HOME} replace />} />
          </RoutesRRD>
          <ToastContainer />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </div>
    </Theme>
  );
};

export default App;
