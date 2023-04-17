import styled, { css } from 'styled-components';

import CollapsedForm from './Collapsed';
import FullForm from './FullForm';

//prettier-ignore
export const StyledSidePanelDeviceWidthWrapper = styled.div<{
  collapseThreshhold: number;
}>`
  ${({ collapseThreshhold }) => css`
    .sidepanel-collapsed { display: none }
    .sidepanel-full { display: flex; }
    @media (max-width: ${collapseThreshhold}px) {
      .sidepanel-collapsed { display: flex; }
      .sidepanel-full { display: none; }
    }
  `}
`;

interface SidePanelDeviceWidthWrapperProps {
  collapseThreshhold: number;
  horizontalThreshhold: number;
  children: React.ReactNode;
}

const SidePanelDeviceWidthWrapper = ({
  collapseThreshhold,
  horizontalThreshhold,
  children,
}: SidePanelDeviceWidthWrapperProps) => {
  return (
    <StyledSidePanelDeviceWidthWrapper collapseThreshhold={collapseThreshhold}>
      <CollapsedForm horizontalThreshhold={horizontalThreshhold}>
        {children}
      </CollapsedForm>
      <FullForm>{children}</FullForm>
    </StyledSidePanelDeviceWidthWrapper>
  );
};

export default SidePanelDeviceWidthWrapper;
