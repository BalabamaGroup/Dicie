import * as Styled from './index.styled';

interface DotsProps {
  className?: string;
}

const Dots = ({ className }: DotsProps) => {
  return (
    <Styled.InlineDots className={className}>
      <span className='dots'>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
    </Styled.InlineDots>
  );
};

export default Dots;
