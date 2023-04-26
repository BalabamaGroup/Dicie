import { ComponentColor } from '@/common/types/theme';

import PlayerRowForm from './forms/row';
import PlayerTileForm from './forms/tile';

interface PlayerProps {
  id?: number;
  className?: string;
  form?: 'tile' | 'row';
  color: ComponentColor;
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  isClickable?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  canBeHighlighted?: boolean;
  isHighlighted?: boolean;
  isDisabled?: boolean;
  tileContent?: {
    label?: string | null;
    labelIsLoading?: boolean;
    outsideLabel?: string | null;
  };
  rowContent?: {
    mainTop: string;
    mainBottom: string;
    label?: string | null;
    labelIsLoading?: boolean;
  };
}

const Player = ({
  id,
  className,
  form = 'tile',
  color,
  size = 'medium',
  canBeHighlighted = false,
  isHighlighted = false,
  tileContent,
  rowContent,
  isClickable = false,
  onClick,
  isDisabled = false,
}: PlayerProps) => {
  // const playerPalettes = [
  //   {
  //     main: '#88b6f2',
  //     light: '#E1E4FF',
  //     dark: '#1E2883',
  //   },
  //   {
  //     main: '#E9DE7E',
  //     light: '#FFFCE2',
  //     dark: '#5F5715',
  //   },
  //   {
  //     main: '#F687BC',
  //     light: '#FBC3DE',
  //     dark: '#AA195F',
  //   },
  // ];

  if (form === 'tile' && tileContent)
    return (
      <PlayerTileForm
        id={id}
        className={className}
        color={color}
        size={size}
        {...tileContent}
        canBeHighlighted={canBeHighlighted}
        isHighlighted={isHighlighted}
        isClickable={isClickable}
        onClick={onClick}
        isDisabled={isDisabled}
      />
    );
  else if (rowContent)
    return (
      <PlayerRowForm
        id={id}
        className={className}
        color={color}
        size={size}
        {...rowContent}
        canBeHighlighted={canBeHighlighted}
        isHighlighted={isHighlighted}
        isClickable={isClickable}
        onClick={onClick}
        isDisabled={isDisabled}
      />
    );

  return null;
};

export default Player;
