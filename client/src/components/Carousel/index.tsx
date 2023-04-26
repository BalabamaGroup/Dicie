import { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';

import { ComponentColor } from '@/common/types/theme';

import Button from '../Button';
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

  const itemsNum = Math.floor((maxWidth - 128) / (itemWidth + gap));
  let width = itemsNum * itemWidth + (itemsNum - 1) * gap;

  const shiftMinus = () => {
    if (shift === 0) return;
    setShift(shift - 1);
  };

  const shiftPlus = () => {
    if (shift === children.length - itemsNum) return;
    setShift(shift + 1);
  };

  useEffect(() => {
    if (shift > children.length - itemsNum)
      setShift(children.length - itemsNum);
  }, [itemsNum]);

  return (
    <Styled.Carousel
      maxWidth={maxWidth}
      cantUseArrows={children.length <= itemsNum}
    >
      <Button
        className='arrow-btn'
        size='small'
        onClick={shiftMinus}
        isDisabled={shift <= 0}
        color={color}
      >
        <ReactSVG className='arrow' src='/images/svgs/arrow.left.svg' />
      </Button>

      <Styled.CarouselItems
        width={width}
        gap={gap}
        itemWidth={itemWidth}
        shift={shift}
        cantUseArrows={children.length <= itemsNum}
      >
        {children}
      </Styled.CarouselItems>

      <Button
        className='arrow-btn'
        size='small'
        color={color}
        onClick={shiftPlus}
        isDisabled={
          shift >= children.length - itemsNum || children.length <= itemsNum
        }
      >
        <ReactSVG className='arrow' src='/images/svgs/arrow.right.svg' />
      </Button>
    </Styled.Carousel>
  );
};

export default Carousel;
