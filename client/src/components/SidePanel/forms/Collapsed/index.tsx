import { useState } from 'react';
import { ReactSVG } from 'react-svg';

import { ComponentColor } from '@/common/types/theme';
import useGameStore from '@/stores/GameStore';
import useThemeStore from '@/stores/ThemeStore';
import sidePanelTheme from '@/styles/themes/componentThemes/sidePanelTheme';

import * as Styled from './index.styled';

interface CollapsedFormProps {
  isHorizontal: boolean;
  children: React.ReactNode;
}

const CollapsedForm = ({ isHorizontal, children }: CollapsedFormProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const onOpen = () => setIsOpened(true);
  const onClose = () => setIsOpened(false);
  const stopPropagation = (e: any) => e.stopPropagation();

  const color = useGameStore((s) => s.getColor());
  const theme = useThemeStore((state) => state.theme);
  const componentTheme = sidePanelTheme[theme][color];

  return (
    <>
      <Styled.CollapsedFormWrapper
        isOpened={isOpened}
        isHorizontal={isHorizontal}
        theme={componentTheme}
      >
        <div className='side-panel-collapsed' onClick={onOpen}>
          <ReactSVG
            src={
              !isHorizontal
                ? '/images/svgs/arrow.left.svg'
                : '/images/svgs/arrow.up.svg'
            }
          />
        </div>
      </Styled.CollapsedFormWrapper>

      <Styled.SidePanelBakdrop
        theme={componentTheme}
        isOpened={isOpened}
        onClick={onClose}
      >
        <Styled.SidePanelMainWrapper
          isOpened={isOpened}
          isHorizontal={isHorizontal}
          onClick={stopPropagation}
        >
          {children}
        </Styled.SidePanelMainWrapper>
      </Styled.SidePanelBakdrop>
    </>
  );
};

export default CollapsedForm;
