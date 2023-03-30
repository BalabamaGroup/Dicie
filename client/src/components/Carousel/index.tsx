import { useState } from 'react';
import { ReactSVG } from 'react-svg';

import { ComponentColor } from '@/common/types/theme';

import * as Styled from './index.styled';

interface CarouselProps {
  color: ComponentColor;
  maxWidth: number;
  itemWidth: number;
  gap: number;
  children: React.ReactNode[];
}

const Carousel = ({
  color,
  maxWidth,
  itemWidth,
  gap,
  children,
}: CarouselProps) => {
  const [shift, setShift] = useState<number>(0);

  let width = maxWidth;

  const itemsNum = Math.floor((width - 128) / (itemWidth + gap));
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
      <Styled.Arrow onClick={shiftMinus} isDisabled={shift <= 0} color={color}>
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
        color={color}
        onClick={shiftPlus}
        isDisabled={shift >= children.length - itemsNum}
      >
        <ReactSVG className='arrow' src='/images/svgs/arrow.right.svg' />
      </Styled.Arrow>
    </Styled.Carousel>
  );
};

export default Carousel;
