import * as Styled from './index.styled';

interface ScrollProps {
  className?: string;
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

const Scroll = ({ className, children, align = 'center' }: ScrollProps) => {
  return (
    <Styled.Scroll className={className} align={align}>
      {children}
    </Styled.Scroll>
  );
};

export default Scroll;
