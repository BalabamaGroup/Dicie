import styled from "styled-components";
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
  background: linear-gradient(
    153.9deg,
    rgba(105, 108, 249, 0.6) 0%,
    rgba(116, 78, 183, 0.4) 100%
  );
  border-radius: 32px;
`;

export const AuthContent = styled.div`
  width: 50%;
`;
