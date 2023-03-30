import { size } from '@/common/utils/device';

import * as Styled from './index.styled';
import SidePanelHeader from './SidePanelHeader';

interface SidePanelProps {
  collapseOn?: number | null;
  bottomOn?: number | null;
}

const SidePanel = ({ collapseOn = null, bottomOn = null }: SidePanelProps) => {
  return (
    <Styled.SidePanelWrapper collapseOn={collapseOn} bottomOn={bottomOn}>
      <Styled.SidePanelOpened className='opened'>
        <SidePanelHeader
          tabs={[
            // {
            //   id: 0,
            //   label: 'Answers',
            //   onClick: () => {},
            //   defaultChoice: false,
            // },
            {
              id: 1,
              label: 'Chat',
              onClick: () => {},
              defaultChoice: true,
            },
          ]}
        />
      </Styled.SidePanelOpened>

      <Styled.SidePanelCollapsed className='collapsed'></Styled.SidePanelCollapsed>
    </Styled.SidePanelWrapper>
  );
};

export default SidePanel;
