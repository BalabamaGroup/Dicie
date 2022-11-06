import styled from "styled-components";

import {
  desktopAndSmaller,
  mobileAndSmaller,
} from "./../../common/utils/device";
import { commonPageStyles } from "../../styles/commonStyles";

export const SignUp = styled.section`
  ${commonPageStyles}

  box-sizing: border-box;
  background: ${({ theme }) => theme.page.background};

  padding: 32px;

  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const AuthPicture = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 32px;
  background: ${({ theme }) => theme.page.auth.pictureBackground};

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  @media ${desktopAndSmaller} {
    display: none;
  }
`;

export const AuthContent = styled.div`
  padding-top: 32px;
  width: 50%;

  @media ${desktopAndSmaller} {
    width: 100%;
  }

  height: calc(100%-32px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .auth_switch {
    position: absolute;
    top: 32px;
  }

  /* @media ${mobileAndSmaller} {
    justify-content: end;
  } */
`;

export const AuthFormWrapper = styled.div``;
