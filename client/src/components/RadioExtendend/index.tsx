import { ComponentColor } from '@/common/types/theme';
import { useThemeStore } from '@/stores/ThemeStore';
import radioExtendedTheme from '@/styles/themes/componentThemes/radioExtendedTheme';

import * as Styled from './index.styled';

interface RadioExtendedProps {
  className?: string;
  color: ComponentColor;
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
  color,
  options,
  selectedOptionId,
}: RadioExtendedProps) => {
  const theme = useThemeStore((state) => state.theme);
  const componentTheme = radioExtendedTheme[theme][color];

  return (
    <Styled.RadioExtended theme={componentTheme} className={className}>
      {options.map((option) => (
        <Styled.RadioExtendedOption
          id={option.id}
          key={option.id}
          theme={componentTheme}
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
