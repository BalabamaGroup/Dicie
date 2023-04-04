import { useState } from 'react';
import styled from 'styled-components';

import { SidePanelViewId, SidePanelViewIdData } from '@/common/types/sidePanel';
import { ComponentColor } from '@/common/types/theme';
import Switch from '@/components/Switch';
import { useThemeStore } from '@/stores/ThemeStore';
import sidePanelTheme from '@/styles/themes/componentThemes/sidePanelTheme';

import SidePanelView from './views';
import { getLabelById, getViewById } from './views/views';

const StyledSidePanelMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  border-radius: 32px;
  transition: background 0.3s ease-in-out;
  background: ${({ theme }) => theme.bodyBackground};
`;

const StyledSidePanelMainHeader = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 32px 32px 8px 8px;
  transition: background 0.3s ease-in-out;
  background: ${({ theme }) => theme.headerBackground};
`;

interface SidePanelMainProps {
  views: SidePanelViewIdData[];
  defaultView?: SidePanelViewId;
  color: ComponentColor;
}

const SidePanelMain = ({ color, views, defaultView }: SidePanelMainProps) => {
  const theme = useThemeStore((state) => state.theme);
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
      <SidePanelView view={currentView} color={color} theme={componentTheme} />
    </StyledSidePanelMainWrapper>
  );
};

export default SidePanelMain;
