import { useLocation, useNavigate } from "react-router-dom";

import routes from "../../../app/common/constants/routes";
import useAuth from "../../hooks/useAuth";
import useTheme from "../../hooks/useTheme";

import * as Styled from "./index.styled";

const NavBar = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const location = useLocation();
  const { toggleTheme } = useTheme();

  const path = location.pathname;

  if (path === routes.SIGN_IN || path === routes.SIGN_UP) return null;

  return (
    <Styled.NavBar path={path}>
      <Styled.Logo>Aspid</Styled.Logo>

      <Styled.LinksWrapper>
        <Styled.Link onClick={() => navigate(routes.HOME)}>Home</Styled.Link>
        <Styled.Link onClick={() => navigate(routes.ABOUT)}>About</Styled.Link>
        <Styled.Link onClick={toggleTheme}>Toggle theme</Styled.Link>
        <Styled.Link onClick={signOut}>Sign out</Styled.Link>
      </Styled.LinksWrapper>
    </Styled.NavBar>
  );
};

export default NavBar;
