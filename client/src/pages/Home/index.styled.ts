import styled from "styled-components";
import {
  commonPageStyles,
  commonPageWithNavbarStyles,
} from "../../styles/commonStyles";

export const HomePage = styled.section`
  ${commonPageWithNavbarStyles}

  background : ${({ theme }) => theme.page.background};
  color: ${({ theme }) => theme.page.color};
`;
