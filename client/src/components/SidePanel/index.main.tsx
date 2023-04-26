import { useState } from 'react';
import styled from 'styled-components';

import { SidePanelViewId, SidePanelViewIdData } from '@/common/types/sidePanel';
import { tabletAndSmaller } from '@/common/utils/device';
import Switch from '@/components/Switch';
import useGameStore from '@/stores/GameStore';
import useThemeStore from '@/stores/ThemeStore';
import sidePanelTheme from '@/styles/themes/componentThemes/sidePanelTheme';

import SidePanelView from './views';
import { getLabelById } from './views/views';

const StyledSidePanelMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  border-radius: 32px;
  transition: background 0.3s ease-in-out;
  background: ${({ theme }) => theme.bodyBackground};
  border: 2px solid ${({ theme }) => theme.border};
  box-shadow: 4px 4px 6px 1px ${({ theme }) => theme.shadowRGBA};
  @media ${tabletAndSmaller} {
    box-shadow: 0px 4px 6px 1px ${({ theme }) => theme.shadowRGBA};
  }
`;

const StyledSidePanelMainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 12px 12px 12px;
  box-sizing: border-box;
  border-radius: 32px 32px 0 0;
  transition: background 0.3s ease-in-out;
  background: ${({ theme }) => theme.headerBackground};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

interface SidePanelMainProps {
  views: SidePanelViewIdData[];
  defaultView?: SidePanelViewId;
}

const SidePanelMain = ({ views, defaultView }: SidePanelMainProps) => {
  const theme = useThemeStore((state) => state.theme);
  const color = useGameStore((s) => s.getColor());
  const componentTheme = sidePanelTheme[theme][color];

  const [currentView, setCurrentView] = useState<SidePanelViewId>(
    defaultView || views[0].id
  );

  const headerOptions = views.map((v) => ({
    id: v.id,
    label: getLabelById(v.id),
    onClick: () => setCurrentView(v.id),
  }));

  return (
    <StyledSidePanelMainWrapper theme={componentTheme}>
      <StyledSidePanelMainHeader theme={componentTheme}>
        <Switch color={color} options={headerOptions} />
      </StyledSidePanelMainHeader>
      <SidePanelView view={currentView} />
    </StyledSidePanelMainWrapper>
  );
};

export default SidePanelMain;
