import { useLocation, useNavigate } from 'react-router-dom';

import routes from '@/common/constants/routes';
import { size } from '@/common/utils/device';
import useAuth from '@/hooks/useAuth';
import useTheme from '@/hooks/useTheme';
import useWindowWidth from '@/hooks/useWindowWidth';

import * as Styled from './index.styled';

interface NavBarProps {
  forsedTextColor?: 'light' | 'dark';
}

const NavBar = ({ forsedTextColor }: NavBarProps) => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { toggleTheme } = useTheme();

  const windowWindth = useWindowWidth(100);

  if (windowWindth < size.tablet) return null;

  return (
    <Styled.NavBar forsedTextColor={forsedTextColor}>
      <Styled.Logo>Balabama</Styled.Logo>

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
