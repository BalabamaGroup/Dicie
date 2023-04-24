import styled from 'styled-components';

import Button from '@/components/Button';
import useThemeStore from '@/stores/ThemeStore';
import useUserStore from '@/stores/UserStore';
import navbarTheme from '@/styles/themes/componentThemes/navbarTheme';

import { useNavbarColor } from '../useNavbarColor';

export const StyledProfileOption = styled.div<{}>`
  width: 100%;
`;

interface SettingsThemeProps {}

const Profile = ({}: SettingsThemeProps) => {
  const theme = useThemeStore((s) => s.theme);
  const color = useNavbarColor();
  const componentTheme = navbarTheme[theme][color];

  const signOut = useUserStore((s) => s.signOut);

  return (
    <StyledProfileOption theme={componentTheme}>
      <Button isScale color={color} size='small' onClick={signOut}>
        Log Out
      </Button>
    </StyledProfileOption>
  );
};

export default Profile;
