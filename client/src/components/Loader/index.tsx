import * as Styled from './index.styled';

const Loader = () => {
  return (
    <Styled.Loader>
      <div className='wrapper'>
        {[...Array(8).keys()].map((i) => (
          <div key={i} className='bubble-wrapper'>
            <div className='bubble' />
          </div>
        ))}
        <div className='main-bubble-wrapper'>
          <div className='main-bubble' />
        </div>
      </div>

      <svg>
        <defs>
          <filter id='goo'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='10'
              result='blur'
            />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
              result='goo'
            />
            <feBlend in='SourceGraphic' in2='goo' />
          </filter>
        </defs>
      </svg>
    </Styled.Loader>
  );
};

export default Loader;
