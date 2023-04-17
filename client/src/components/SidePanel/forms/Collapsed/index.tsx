import { useState } from 'react';
import { ReactSVG } from 'react-svg';

import useGameStore from '@/stores/GameStore';
import useThemeStore from '@/stores/ThemeStore';
import sidePanelTheme from '@/styles/themes/componentThemes/sidePanelTheme';

import * as Styled from './index.styled';

interface CollapsedFormProps {
  horizontalThreshhold: number;
  children: React.ReactNode;
}

const CollapsedForm = ({
  horizontalThreshhold,
  children,
}: CollapsedFormProps) => {
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
        className='sidepanel-collapsed'
        isOpened={isOpened}
        horizontalThreshhold={horizontalThreshhold}
        theme={componentTheme}
      >
        <div className='side-panel-collapsed' onClick={onOpen}>
          <ReactSVG src={'/images/svgs/arrow.left.svg'} />
        </div>
      </Styled.CollapsedFormWrapper>

      <Styled.SidePanelBakdrop
        className='sidepanel-collapsed'
        theme={componentTheme}
        isOpened={isOpened}
        onClick={onClose}
      >
        <Styled.SidePanelMainWrapper
          isOpened={isOpened}
          horizontalThreshhold={horizontalThreshhold}
          onClick={stopPropagation}
        >
          {children}
        </Styled.SidePanelMainWrapper>
      </Styled.SidePanelBakdrop>
    </>
  );
};

export default CollapsedForm;
