import { Routes as RoutesRRD, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './common/constants/routes';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Room from './pages/Room';
import Auth from './pages/Auth';
import ToastContainer from './components/Toast/ToastContainer';
import NavBar from './components/NavBar';
import Theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import React from 'react';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <div className='App'>
        <QueryClientProvider client={queryClient}>
          <NavBar />
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
