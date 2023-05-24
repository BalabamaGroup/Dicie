import PlayerRowForm from './forms/row';
import PlayerTileForm from './forms/tile';
import { ComponentColor } from '@/common/types/theme';

interface PlayerProps {
  id: number;
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
