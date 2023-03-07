import { useNavigate } from 'react-router-dom';
import { useTheme as useThemeSC } from 'styled-components';

import routes from '@/common/constants/routes';
import { ComponentColor } from '@/common/types/theme';
import useAuth from '@/hooks/useAuth';
import useTheme from '@/hooks/useTheme';

import * as Styled from './index.styled';

interface NavBarProps {
  color: ComponentColor;
  shade: 'light' | 'dark';
}

const NavBar = ({ color, shade = 'light' }: NavBarProps) => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { toggleTheme } = useTheme();

  let theme: any = useThemeSC();
  theme = theme.navbar[color || theme.navbar.default];

  return (
    <Styled.NavBar shade={shade} theme={theme}>
      <Styled.Logo>Dicie</Styled.Logo>

      <Styled.LinksWrapper>
        {/* <Styled.Link onClick={() => navigate('/voicechat')}>
          WebRTC test
        </Styled.Link> */}
        <Styled.Link onClick={() => navigate(routes.HOME)}>Home</Styled.Link>
        <Styled.Link onClick={toggleTheme}>Toggle theme</Styled.Link>
        <Styled.Link onClick={signOut}>Sign out</Styled.Link>
      </Styled.LinksWrapper>
    </Styled.NavBar>
  );
};

export default NavBar;
