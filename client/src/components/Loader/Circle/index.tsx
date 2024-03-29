import * as Styled from './index.styled';

// thanks to Maxime Nory
// https://codepen.io/Illusion/pen/LgyvpO

const Circle = () => {
  return (
    <Styled.WholePage>
      <Styled.CircleLoader>
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
      </Styled.CircleLoader>
    </Styled.WholePage>
  );
};

export default Circle;
