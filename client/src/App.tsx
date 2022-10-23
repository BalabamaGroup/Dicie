import { Routes as RoutesRRD, Route, Navigate } from "react-router-dom";
import { Provider as MobxProvider } from "mobx-react";
import "./App.css";

import store from "./stores/index";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Routes from "./constants/routes";
import Room from "./pages/Room";

const App = () => {
  return (
    <div className="App">
      <MobxProvider {...store}>
        <RoutesRRD>
          <Route path={Routes.SIGN_IN} element={<SignIn />} />
          <Route path={Routes.SIGN_UP} element={<SignUp />} />

          <Route path={Routes.HOME} element={<Home />} />
          <Route path={Routes.ABOUT} element={<About />} />
          <Route path={Routes.CONTACT} element={<Contact />} />

          <Route path={Routes.ROOM} element={<Room />} />

          <Route path="*" element={<Navigate to={Routes.HOME} replace />} />
        </RoutesRRD>
      </MobxProvider>
    </div>
  );
};

export default App;
