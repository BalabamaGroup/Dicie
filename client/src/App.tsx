import { Routes, Route, Navigate } from "react-router-dom";
import { Provider as MobxProvider } from "mobx-react";
import "./App.css";

import store from "./stores/index";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SignIn from "./pages/LoginPage/SignIn";
import SignUpPage from "./pages/SignUpPage";

function App() {
  fetch("http://localhost:8080/api/user").then(function (response) {
    console.log(response);
  });

  return (
    <div className="App">
      <MobxProvider {...store}>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MobxProvider>
    </div>
  );
}

export default App;
