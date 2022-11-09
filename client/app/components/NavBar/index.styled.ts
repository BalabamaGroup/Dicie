import styled, { css } from "styled-components";
import routes from "../../../app/common/constants/routes";

const getCssByPath = (path: string) => {
  switch (true) {
    case path === routes.HOME:
      return css`
        background-color: #201e1f;
        color: white;
      `;
  }
};

export const NavBar = styled.div<{ path: string; theme: any }>`
  background-color: transparent;

  padding: 0 64px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: red;

  ${({ path }) => getCssByPath(path)}
  background: ${({ theme }) => theme && theme.navbar.background};
  color: ${({ theme }) => theme && theme.navbar.text};
`;

export const Logo = styled.div`
  cursor: pointer;
  font-weight: 600;
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

export const Link = styled.div`
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;
