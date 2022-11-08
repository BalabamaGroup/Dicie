import styled from "styled-components";
import { commonPageWithNavbarStyles } from "../../styles/commonStyles";

export const HomePage = styled.section`
  ${commonPageWithNavbarStyles}

  background : ${({ theme }) => theme.page.background};
  color: ${({ theme }) => theme.page.color};
`;

export const HomeContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
