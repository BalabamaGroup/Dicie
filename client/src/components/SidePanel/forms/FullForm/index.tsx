import styled from 'styled-components';

const StyledFullFormWrapper = styled.div`
  max-width: 400px;
  min-width: 400px;
  width: 400px;
  min-height: 100%;
  max-height: 100%;
  height: 100%;
`;

interface FullFormProps {
  children: React.ReactNode;
}

const FullForm = ({ children }: FullFormProps) => {
  return (
    <StyledFullFormWrapper className='sidepanel-full'>
      {children}
    </StyledFullFormWrapper>
  );
};

export default FullForm;
