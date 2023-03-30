import styled from 'styled-components';

import { ComponentColor } from '@/common/types/theme';
import Switch from '@/components/Switch';
import { useThemeStore } from '@/stores/ThemeStore';
import sidePanelTheme from '@/styles/themes/componentThemes/sidePanelTheme';

const StyledSidePanelMainWrapper = styled.div<{}>`
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  border-radius: 32px;

  transition: background 0.3s ease-in-out;
  background: ${({ theme }) => theme.bodyBackground};
`;

const StyledSidePanelMainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 32px 32px 8px 8px;

  transition: background 0.3s ease-in-out;
  background: ${({ theme }) => theme.headerBackground};
`;

interface SidePanelMainProps {
  color: ComponentColor;
}

const SidePanelMain = ({ color }: SidePanelMainProps) => {
  const theme = useThemeStore((state) => state.theme);
  const componentTheme = sidePanelTheme[theme][color];

  return (
    <StyledSidePanelMainWrapper theme={componentTheme}>
      <StyledSidePanelMainHeader theme={componentTheme}>
        <Switch
          color={color}
          options={[
            {
              id: 0,
              label: 'Answers',
              onClick: () => {},
              defaultChoice: false,
            },
            {
              id: 1,
              label: 'Chat',
              onClick: () => {},
              defaultChoice: true,
            },
          ]}
        />
      </StyledSidePanelMainHeader>
    </StyledSidePanelMainWrapper>
  );
};

export default SidePanelMain;
