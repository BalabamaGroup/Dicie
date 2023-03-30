import styled from 'styled-components';

export const StyledWaitForMyTurn = styled.div<{}>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 29px;
  font-weight: 800;
  text-align: center;
  color: ${({ theme }) =>
    theme.guessBooGame.setup.actionArea.intructionTextWait};
`;

interface WaitForMyTurnProps {}

const WaitForMyTurn = ({}: WaitForMyTurnProps) => {
  return <StyledWaitForMyTurn>Wait for your turn</StyledWaitForMyTurn>;
};

export default WaitForMyTurn;
