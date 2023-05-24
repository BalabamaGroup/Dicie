import * as Styled from './index.styled';
import { ComponentColor } from '@/common/types/theme';
import Loader from '@/components/Loader';
import useThemeStore from '@/stores/ThemeStore';
import playerTheme from '@/styles/themes/componentThemes/playerTheme';

interface PlayerRowFormProps {
  id?: number;
  className?: string;
  color: ComponentColor;
  size?: 'small' | 'medium' | 'large' | 'extraLarge';

  isClickable?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;

  mainTop: string;
  mainBottom: string;
  label?: string | null;
  labelIsLoading?: boolean;

  canBeHighlighted?: boolean;
  isHighlighted?: boolean;

  isDisabled?: boolean;
}

const PlayerRowForm = ({
  id,
  className,
  color,
  size = 'medium',
  canBeHighlighted = false,
  isHighlighted = false,
  mainTop,
  mainBottom,
  label,
  labelIsLoading = false,
  isClickable = false,
  onClick,
  isDisabled = false,
}: PlayerRowFormProps) => {
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
    {
      main: '#87F69F',
      light: '#CFF8D8',
      dark: '#137411',
    },
  ];

  const playerPalette = id ? playerPalettes[id % 4] : playerPalettes[0];

  const theme = useThemeStore((state) => state.theme);
  const componentTheme = playerTheme[theme][color].row;

  return (
    <Styled.PlayerRowFormWrapper
      isClickable={isClickable}
      canBeHighlighted={canBeHighlighted}
      isHighlighted={isHighlighted}
      isDisabled={isDisabled}
      playerPalette={playerPalette}
      theme={componentTheme}
    >
      <Styled.PlayerRowForm
        onClick={onClick}
        playerPalette={playerPalette}
        theme={componentTheme}
        themeName={theme}
      >
        <div className='avatar'></div>
        <div className='main'>
          <div className='main-top' title={mainTop}>
            {mainTop}
          </div>
          <div className='main-bottom' title={mainBottom}>
            {mainBottom}
          </div>
        </div>

        {(label || labelIsLoading) && (
          <div className='label' title={label || '...'}>
            {labelIsLoading ? <Loader.InlineDots /> : label}
          </div>
        )}
      </Styled.PlayerRowForm>
    </Styled.PlayerRowFormWrapper>
  );
};

export default PlayerRowForm;
