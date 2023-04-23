import styled, { css } from 'styled-components';

export const MobileNavBarBackdrop = styled.div<{
  isOpened: boolean;
}>`
  z-index: 1000;
  position: fixed;
  height: var(--vh100);
  width: 100vw;
  top: 0;
  bottom: 0;
  display: none;

  ${({ isOpened }) =>
    isOpened &&
    css`
      display: block;
    `}
`;

export const MobileNavBar = styled.div<{
  isOpened: boolean;
  isSubOption: boolean;
}>`
  z-index: 1001;
  cursor: pointer;
  position: fixed;
  top: 4px;
  right: 4px;
  height: 48px;
  max-height: 48px;
  width: 48px;
  border-radius: 24px;
  transition: background 0.3s ease-in-out;
  background: ${({ theme }) => theme.mobile.burgerBackground};
  box-shadow: -4px 4px 24px ${({ theme }) => theme.mobile.burgerShadowRGBA};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  .burger-icon {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    width: 24px;
    height: 24px;
    transition: opacity 0.1s ease-in-out;
    svg {
      rect {
        transition: fill 0.3s ease-in-out;
        fill: ${({ theme }) => theme.mobile.burgerIconFill};
      }
    }
  }

  transition: width 0.3s ease-in-out, max-height 0.3s ease-in-out,
    background 0.3s ease-in;

  ${({ isOpened }) =>
    isOpened &&
    css`
      cursor: auto;
      height: auto;
      max-height: 480px;
      width: 160px;
      background: ${({ theme }) => theme.mobile.openedBackground};
      box-shadow: -4px 4px 24px ${({ theme }) => theme.mobile.burgerShadowRGBA};
      .burger-icon {
        opacity: 0;
      }
    `}/* ${({ isSubOption }) =>
    isSubOption &&
    css`
      background: #100f16;
      transition: background 0s ease-in;
    `} */
`;

export const MobileNavBarContent = styled.div<{
  isOpened: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 4px;
  box-sizing: border-box;

  transform: scale(0);
  opacity: 0;

  max-height: 48px;
  transition: all 0.3s ease-in-out;
  transition: max-height 0.15s ease-out;
  overflow: hidden;

  ${({ isOpened }) =>
    isOpened &&
    css`
      width: 100%;

      height: 100%;
      max-height: 480px;
      transition: max-height 0.25s ease-in;

      transform: scale(1);
      opacity: 1;
      padding: 16px;
    `}
`;

export const MobileNavBarOption = styled.div`
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
  height: 40px;
  padding: 0 8px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;

  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.mobile.optionText};

  background: transparent;
  &:hover {
    background: ${({ theme }) => theme.mobile.optionBackgroundHover};
  }

  .option-icon {
    width: 20px;
    height: 20px;
    svg {
      width: 20px;
      height: 20px;
      path {
        fill: ${({ theme }) => theme.mobile.optionIconFill};
      }
    }
  }
`;

export const MobileNavBarOptionHeader = styled(MobileNavBarOption)`
  color: ${({ theme }) => theme.mobile.optionExpandedHeaderContent};
  background: ${({ theme }) => theme.mobile.optionExpandedHeaderBackground};
  justify-content: start;

  .option-icon {
    width: 12px;
    height: 12px;
    margin-bottom: 5px;
    svg {
      width: 12px;
      height: 12px;
      path {
        fill: ${({ theme }) => theme.mobile.optionExpandedHeaderContent};
      }
    }
  }

  &:hover {
    /* background: #181621; */
    color: ${({ theme }) => theme.mobile.optionExpandedHeaderContentHover};
    .option-icon {
      svg {
        path {
          fill: ${({ theme }) => theme.mobile.optionExpandedHeaderContentHover};
        }
      }
    }
  }

  padding-right: 20px;
  .option-title {
    margin-left: auto;
    margin-right: auto;
  }
`;
