import { useLocation, useNavigate } from 'react-router-dom';

import routes from '@/shared/constants/routes';
import useAuth from '@/shared/hooks/useAuth';
import useTheme from '@/shared/hooks/useTheme';
import useWindowWidth from '@/shared/hooks/useWindowWidth';
import { size } from '@/shared/utils/device';

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
      <Styled.Logo>Dicie</Styled.Logo>

      <Styled.LinksWrapper>
        <Styled.Link onClick={() => navigate('/voicechat')}>
          WebRTC test
        </Styled.Link>
        <Styled.Link onClick={() => navigate(routes.HOME)}>Home</Styled.Link>
        <Styled.Link onClick={toggleTheme}>Toggle theme</Styled.Link>
        <Styled.Link onClick={signOut}>Sign out</Styled.Link>
      </Styled.LinksWrapper>
    </Styled.NavBar>
  );
};

export default NavBar;
