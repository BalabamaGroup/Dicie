import * as Styled from './index.styled';

interface BouncingDotsProps {
  size: number;
}

const BouncingDots = ({ size = 20 }: BouncingDotsProps) => {
  return (
    <Styled.BouncingDots size={size}>
      <>
        <div className='bouncing-loader'>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>
      </>
    </Styled.BouncingDots>
  );
};

export default BouncingDots;
