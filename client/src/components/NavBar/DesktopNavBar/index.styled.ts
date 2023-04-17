import styled from 'styled-components';

export const DesktopNavBar = styled.div<{}>`
  position: fixed;
  z-index: 1200;

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
    /* color: ${({ isWait, theme }) =>
      isWait ? theme.navbar.wait : theme.navbar.go}; */
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

export const DesktopNavBarContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 64px;
`;

export const DesktopNavBarOption = styled.div.attrs({
  className: 'navbar-link',
})`
  cursor: context-menu;
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  height: 16px;
  position: relative;
  box-sizing: border-box;

  .option-title,
  .option-content-title {
    cursor: context-menu;
    color: #fff;
    font-weight: 800;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    box-sizing: border-box;
  }

  &:hover {
    .option-content {
      pointer-events: all;
    }
  }

  .option-content {
    z-index: 1200;
    cursor: auto;
    opacity: 0;
    pointer-events: none;

    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-32px);

    width: 160px;
    padding: 13.6px;
    box-sizing: border-box;
    border-radius: 24px;

    background: #181621;
    border: 2.5px solid #8986f5;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.75);

    transition: opacity 0.15s ease-in-out;
    &:hover {
      opacity: 1;
      pointer-events: all;
    }

    .option-content-title {
      margin-bottom: 16px;
    }
  }
`;
