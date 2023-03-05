import styled, { css } from 'styled-components';

export const NavBar = styled.div<{
  revertTextColor: boolean;
  forsedTextColor: 'light' | 'dark' | undefined;
}>`
  padding: 0 64px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  width: 100%;

  .navbar-logo,
  .navbar-link {
    color: ${({ revertTextColor, theme }) =>
      revertTextColor ? theme.navbar.revertText : theme.navbar.text};
  }

  .navbar-logo,
  .navbar-link {
    color: ${({ forsedTextColor, theme }) =>
      forsedTextColor &&
      (forsedTextColor === 'light'
        ? theme.navbar.forsedTextLight
        : theme.navbar.forsedTextDark)};
  }
`;

export const Logo = styled.div.attrs({
  className: 'navbar-logo',
})`
  cursor: pointer;
  font-weight: 800;
  font-size: 32px;
  line-height: 44px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const Link = styled.div.attrs({
  className: 'navbar-link',
})`
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;
