import * as Styled from './index.styled';

interface RadioExtendedProps {
  className?: string;
  options: Array<{
    id: string;
    label: string;
    content: React.ReactElement;
    onSelect: React.ReactEventHandler<HTMLDivElement>;
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
          key={option.id}
          isSelected={option.id === selectedOptionId}
          onClick={option.onSelect}
        >
          <div className='option-header'>
            <div className='radio-indicator-wrapper'>
              <div className='radio-indicator'></div>
            </div>
            {option.label}
          </div>
          <div className='option-content'>{option.content}</div>
        </Styled.RadioExtendedOption>
      ))}
    </Styled.RadioExtended>
  );
};

export default RadioExtended;
