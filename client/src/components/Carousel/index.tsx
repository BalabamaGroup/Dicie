import { useState } from 'react';
import { ReactSVG } from 'react-svg';

import useWindowWidth from '@/hooks/useWindowWidth';

import * as Styled from './index.styled';

interface CarouselProps {
  maxWidth: number;
  itemWidth: number;
  gap: number;
  children: React.ReactNode[];
}

const Carousel = ({ maxWidth, itemWidth, gap, children }: CarouselProps) => {
  const [shift, setShift] = useState<number>(0);

  let width = maxWidth;

  let itemsNum = Math.floor((width - 128) / (itemWidth + gap));
  width = itemsNum * itemWidth + (itemsNum - 1) * gap;

  const shiftMinus = () => {
    if (shift === 0) return;
    setShift(shift - 1);
  };

  const shiftPlus = () => {
    if (shift === children.length - itemsNum) return;
    setShift(shift + 1);
  };

  return (
    <Styled.Carousel maxWidth={maxWidth}>
      <Styled.Arrow onClick={shiftMinus} isDisabled={shift <= 0}>
        <ReactSVG className='arrow' src='/images/svgs/arrow.left.svg' />
      </Styled.Arrow>

      <Styled.CarouselItems
        width={width}
        gap={gap}
        itemWidth={itemWidth}
        shift={shift}
      >
        {children}
      </Styled.CarouselItems>

      <Styled.Arrow
        onClick={shiftPlus}
        isDisabled={shift >= children.length - itemsNum}
      >
        <ReactSVG className='arrow' src='/images/svgs/arrow.right.svg' />
      </Styled.Arrow>
    </Styled.Carousel>
  );
};

export default Carousel;
