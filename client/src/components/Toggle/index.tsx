import * as Styled from './index.styled';

interface ToggleProps {
  className?: string;
  value: boolean;
  onChange: React.MouseEventHandler<HTMLDivElement>;
  size?: 'large' | 'medium' | 'small';
  forsedTheme?: 'dark' | 'light';
}

const Toggle = ({
  className,
  value,
  onChange,
  size = 'medium',
  forsedTheme,
}: ToggleProps) => {
  return (
    <Styled.ToggleWrapper
      className={className}
      value={value}
      onClick={onChange}
      size={size}
      forsedTheme={forsedTheme}
    >
      <Styled.Toggle value={value} size={size} forsedTheme={forsedTheme} />
    </Styled.ToggleWrapper>
  );
};

export default Toggle;
