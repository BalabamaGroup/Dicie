import styled, { css } from 'styled-components';

import CollapsedForm from './Collapsed';
import FullForm from './FullForm';

export const StyledSidePanelDeviceWidthWrapper = styled.div<{
  collapseThreshhold: number;
  horizontalThreshhold: number;
}>`
  ${({ collapseThreshhold, horizontalThreshhold }) => css`
    .sidepanel-collapsed {
      @media (max-width: ${collapseThreshhold}) {
        display: flex;
      }
    }
  `}
`;

interface SidePanelDeviceWidthWrapperProps {
  isCollapsed: boolean;
  isHorizontal: boolean;
  children: React.ReactNode;
}

const SidePanelDeviceWidthWrapper = ({
  isCollapsed,
  isHorizontal,
  children,
}: SidePanelDeviceWidthWrapperProps) => {
  <StyledSidePanelDeviceWidthWrapper
    collapseThreshhold={collapseThreshhold}
    horizontalThreshhold={horizontalThreshhold}
  >
    <CollapsedForm isHorizontal={isHorizontal}>{children}</CollapsedForm>
    <FullForm>{children}</FullForm>
  </StyledSidePanelDeviceWidthWrapper>;
};

export default SidePanelDeviceWidthWrapper;
