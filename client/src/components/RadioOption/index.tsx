import * as Styled from './index.styled';

interface RadioOptionProps {
  isSelected: boolean;
}

const RadioOption = ({ isSelected }: RadioOptionProps) => {
  return (
    <Styled.RadioOption>
      <Styled.Indicator isSelected={isSelected} />
    </Styled.RadioOption>
  );
};

export default RadioOption;
