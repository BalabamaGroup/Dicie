import { ComponentColor } from '@/common/types/theme';
import Loader from '@/components/Loader';
import useThemeStore from '@/stores/ThemeStore';
import playerTheme from '@/styles/themes/componentThemes/playerTheme';

import * as Styled from './index.styled';
import { PlayerTileFormSizeWrapper } from './index.styled.size';

interface PlayerTileFormProps {
  id?: number;
  className?: string;
  color: ComponentColor;
  size?: 'small' | 'medium' | 'large' | 'extraLarge';

  isClickable?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;

  label?: string | null;
  labelIsLoading?: boolean;
  outsideLabel?: string | null;

  canBeHighlighted?: boolean;
  isHighlighted?: boolean;

  isDisabled?: boolean;
}

const PlayerTileForm = ({
  id,
  className,
  color,
  size = 'medium',
  canBeHighlighted = false,
  isHighlighted = false,
  label,
  labelIsLoading = false,
  outsideLabel,
  isClickable = false,
  onClick,
  isDisabled = false,
}: PlayerTileFormProps) => {
  const playerPalettes = [
    {
      main: '#88b6f2',
      light: '#E1E4FF',
      dark: '#1E2883',
    },
    {
      main: '#E9DE7E',
      light: '#FFFCE2',
      dark: '#5F5715',
    },
    {
      main: '#F687BC',
      light: '#FBC3DE',
      dark: '#AA195F',
    },
  ];

  const playerPalette = id ? playerPalettes[id % 3] : playerPalettes[0];

  const theme = useThemeStore((state) => state.theme);
  const componentTheme = playerTheme[theme][color].tile;

  return (
    <PlayerTileFormSizeWrapper
      className={`${className} player-wrapper`}
      size={size}
    >
      <Styled.PlayerTileFormWrapper
        onClick={onClick}
        isDisabled={isDisabled}
        isClickable={isClickable}
      >
        <Styled.HighlightWrapper
          className='highlight-wrapper'
          canBeHighlighted={canBeHighlighted}
          isHighlighted={isHighlighted}
          themeName={theme}
          playerPalette={playerPalette}
        >
          <Styled.PlayerTileForm
            className='player'
            playerPalette={playerPalette}
          >
            {(label || labelIsLoading) && (
              <Styled.PlayerTileFormLabel
                className='player-label'
                themeName={theme}
                playerPalette={playerPalette}
              >
                <div className='character' title={label || '...'}>
                  {labelIsLoading ? <Loader.InlineDots /> : label}
                </div>
              </Styled.PlayerTileFormLabel>
            )}
          </Styled.PlayerTileForm>
        </Styled.HighlightWrapper>
        {outsideLabel && (
          <Styled.PlayerTileFormOutsideLabel
            theme={componentTheme}
            className='player-outside-label'
          >
            <div className='username' title={outsideLabel}>
              {outsideLabel}
            </div>
          </Styled.PlayerTileFormOutsideLabel>
        )}
      </Styled.PlayerTileFormWrapper>
    </PlayerTileFormSizeWrapper>
  );
};

export default PlayerTileForm;
