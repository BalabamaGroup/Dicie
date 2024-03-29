import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import routes from '@/common/constants/routes';

import useThemeStore from '@/stores/ThemeStore';

import navbarTheme from '@/styles/themes/componentThemes/navbarTheme';

import MyRoomNavigation from '../SubOptions/MyRoomNavigation';
import Profile from '../SubOptions/Profile';
import SettingsTheme from '../SubOptions/SettingsTheme';
import { useNavbarColor } from '../useNavbarColor';
import * as Styled from './index.styled';

interface MobileNavBarProps {
  withHome: boolean;
  withMyRoom: boolean;
}

const MobileNavBar = ({ withHome, withMyRoom }: MobileNavBarProps) => {
  const theme = useThemeStore((s) => s.theme);
  const color = useNavbarColor();
  const componentTheme = navbarTheme[theme][color];

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const onOpen = () => setIsOpened(true);
  const onClose = () => {
    setIsOpened(false);
    onCloseMyRoom();
    onCloseSettings();
  };

  const navigate = useNavigate();
  const goHome = () => navigate(routes.HOME);
  const goToLeaderboard = () => navigate(routes.LEADERBOARD);

  const [isSettings, setIsSettings] = useState<boolean>(false);
  const onOpenSettings = () => setIsSettings(true);
  const onCloseSettings = () => setIsSettings(false);

  const [isMyRoom, setIsMyRoom] = useState<boolean>(false);
  const onOpenMyRoom = () => setIsMyRoom(true);
  const onCloseMyRoom = () => setIsMyRoom(false);

  const [isProfile, setIsProfile] = useState<boolean>(false);
  const onOpenProfile = () => setIsProfile(true);
  const onCloseProfile = () => setIsProfile(false);

  const isSubOption = isSettings || isMyRoom || isProfile;

  return (
    <>
      <Styled.MobileNavBarBackdrop
        isOpened={isOpened}
        onClick={onClose}
        theme={componentTheme}
      />

      <Styled.MobileNavBar
        className='navbar-mobile'
        isOpened={isOpened}
        isSubOption={isSubOption}
        onClick={onOpen}
        theme={componentTheme}
      >
        <ReactSVG className='burger-icon' src='/images/svgs/burger-menu.svg' />

        <Styled.MobileNavBarContent
          isOpened={isOpened}
          className='content'
          theme={componentTheme}
        >
          {!isSubOption && [
            withHome && (
              <Styled.MobileNavBarOption
                key='home'
                className='option'
                onClick={goHome}
                theme={componentTheme}
              >
                <ReactSVG className='option-icon' src='/images/svgs/home.svg' />
                Home
              </Styled.MobileNavBarOption>
            ),

            <Styled.MobileNavBarOption
              key='leaderboard'
              className='option'
              onClick={goToLeaderboard}
              theme={componentTheme}
            >
              <ReactSVG
                className='option-icon'
                src='/images/svgs/leaderboard.svg'
              />
              Leaderboard
            </Styled.MobileNavBarOption>,

            <Styled.MobileNavBarOption
              key='profile'
              onClick={onOpenProfile}
              theme={componentTheme}
            >
              <ReactSVG className='option-icon' src='/images/svgs/person.svg' />
              Profile
            </Styled.MobileNavBarOption>,

            withMyRoom && (
              <Styled.MobileNavBarOption
                key='myroom'
                onClick={onOpenMyRoom}
                theme={componentTheme}
              >
                <ReactSVG className='option-icon' src='/images/svgs/room.svg' />
                My Room
              </Styled.MobileNavBarOption>
            ),

            <Styled.MobileNavBarOption
              key='settings'
              onClick={onOpenSettings}
              theme={componentTheme}
            >
              <ReactSVG
                className='option-icon'
                src='/images/svgs/settings.svg'
              />
              Theme
            </Styled.MobileNavBarOption>,
          ]}

          {isSettings && [
            <Styled.MobileNavBarOptionHeader
              key='settings-header'
              className='option'
              onClick={onCloseSettings}
              theme={componentTheme}
            >
              <ReactSVG
                className='option-icon'
                src='/images/svgs/arrow.left.svg'
              />
              <div className='option-title'>Theme</div>
            </Styled.MobileNavBarOptionHeader>,
            <SettingsTheme key='settings-theme' />,
          ]}

          {isMyRoom && [
            <Styled.MobileNavBarOptionHeader
              key='myroom-header'
              className='option'
              onClick={onCloseMyRoom}
              theme={componentTheme}
            >
              <ReactSVG
                className='option-icon'
                src='/images/svgs/arrow.left.svg'
              />
              <div className='option-title'>My Room</div>
            </Styled.MobileNavBarOptionHeader>,
            <MyRoomNavigation key='myroom-navigation' />,
          ]}

          {isProfile && [
            <Styled.MobileNavBarOptionHeader
              key='profile-header'
              className='option'
              onClick={onCloseProfile}
              theme={componentTheme}
            >
              <ReactSVG
                className='option-icon'
                src='/images/svgs/arrow.left.svg'
              />
              <div className='option-title'>Profile</div>
            </Styled.MobileNavBarOptionHeader>,
            <Profile key='profile' />,
          ]}
        </Styled.MobileNavBarContent>
      </Styled.MobileNavBar>
    </>
  );
};

export default MobileNavBar;
