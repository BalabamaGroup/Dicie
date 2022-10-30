import styled from "styled-components";

import {
  desktopAndSmaller,
  mobileAndSmaller,
} from "./../../common/utils/device";
import { commonPageStyles } from "../../styles/commonStyles";

export const SignUp = styled.section`
  ${commonPageStyles}

  box-sizing: border-box;
  background-color: #f7f4fc;

  padding: 32px;

  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const AuthPicture = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 32px;
  background: linear-gradient(
    180deg,
    rgba(137, 134, 245, 0.5) 0%,
    rgba(106, 101, 255, 0.5) 100%
  );

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

  height: 100%;
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
