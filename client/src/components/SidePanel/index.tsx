import { useState } from 'react';
import styled from 'styled-components';

import { SidePanelViewId } from '@/common/types/sidePanel';
import { size, tabletAndSmaller } from '@/common/utils/device';
import Switch from '@/components/Switch';
import useGameStore from '@/stores/GameStore';
import useThemeStore from '@/stores/ThemeStore';
import sidePanelTheme from '@/styles/themes/componentThemes/sidePanelTheme';

import SidePanelForm from './forms';
import SidePanelView from './views';
import { getLabelById } from './views/views';

const StyledSidePanelMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  width: 100%;
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

interface SidePanelProps {
  views: SidePanelViewId[];
  defaultView?: SidePanelViewId;

  collapseThreshhold?: number;
  horizontalThreshhold?: number;
}

const SidePanel = ({
  collapseThreshhold = size.desktop,
  horizontalThreshhold = size.tablet,
  views,
  defaultView,
}: SidePanelProps) => {
  const theme = useThemeStore((state) => state.theme);
  const color = useGameStore((s) => s.getColor());
  const componentTheme = sidePanelTheme[theme][color];

  const [currentView, setCurrentView] = useState<SidePanelViewId>(
    defaultView || views[0]
  );

  const headerOptions = views.map((view) => ({
    id: view,
    label: getLabelById(view),
    onClick: () => setCurrentView(view),
  }));

  return (
    <SidePanelForm
      collapseThreshhold={collapseThreshhold}
      horizontalThreshhold={horizontalThreshhold}
    >
      <StyledSidePanelMainWrapper theme={componentTheme}>
        <StyledSidePanelMainHeader theme={componentTheme}>
          <Switch color={color} options={headerOptions} />
        </StyledSidePanelMainHeader>

        <SidePanelView view={currentView} />
      </StyledSidePanelMainWrapper>
    </SidePanelForm>
  );
};

export default SidePanel;
