import { Routes as RoutesRRD, Route, Navigate } from "react-router-dom";
import { Provider as MobxProvider } from "mobx-react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./App.css";

import Routes from "./common/constants/routes";

import store from "./stores/index";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Room from "./pages/Room";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="App">
      {/* // */}
      {/* {sessionStorage.getItem("token") ? (
        <button
          onClick={() => {
            sessionStorage.removeItem("token");
            window.location.href = "/auth/signin";
          }}
        >
          LOG_OUT
        </button>
      ) : (
        <>
          <button onClick={() => (window.location.href = Routes.SIGN_IN)}>
            SIGN_IN
          </button>
          <button onClick={() => (window.location.href = Routes.SIGN_UP)}>
            SIGN_UP
          </button>
        </>
      )}
      <button onClick={() => (window.location.href = Routes.HOME)}>HOME</button> */}
      {/* // */}
      <QueryClientProvider client={queryClient}>
        <MobxProvider {...store}>
          <RoutesRRD>
            <Route path={Routes.SIGN_IN} element={<Auth />} />
            <Route path={Routes.SIGN_UP} element={<Auth />} />

            <Route path={Routes.HOME} element={<Home />} />
            <Route path={Routes.ABOUT} element={<About />} />
            <Route path={Routes.CONTACT} element={<Contact />} />

            <Route path={Routes.ROOM} element={<Room />} />
            <Route path="*" element={<Navigate to={Routes.HOME} replace />} />
          </RoutesRRD>
        </MobxProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
