import styled, { css } from 'styled-components';

import { tabletAndSmaller } from '@/common/utils/device';

export const NavBar = styled.div<{
  isWait: boolean;
}>`
  position: fixed;

  padding: 0 64px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  width: 100%;

  .navbar-logo,
  .navbar-link {
    transition: color 0.3s ease-in-out;
    color: ${({ isWait, theme }) =>
      isWait ? theme.navbar.wait : theme.navbar.go};
  }

  @media ${tabletAndSmaller} {
    display: none;
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