import * as Styled from './index.styled';

interface RadioExtendedProps {
  className?: string;
  options: Array<{
    id: string;
    label: string;
    content: React.ReactElement;
  }>;
  selectedOptionId: string;
}

const RadioExtended = ({
  className,
  options,
  selectedOptionId,
}: RadioExtendedProps) => {
  return (
    <Styled.RadioExtended className={className}>
      {options.map((option) => (
        <Styled.RadioExtendedOption
          id={option.id}
          isSelected={option.id === selectedOptionId}
        >
          <div className='option-header'>{option.label}</div>
          <div className='option-content'>{option.content}</div>
        </Styled.RadioExtendedOption>
      ))}
    </Styled.RadioExtended>
  );
};

export default RadioExtended;
