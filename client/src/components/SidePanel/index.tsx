import { SidePanelViewId, SidePanelViewIdData } from '@/common/types/sidePanel';

import SidePanelForm from './forms';
import SidePanelMain from './index.main';

interface SidePanelProps {
  views: SidePanelViewIdData[];
  defaultView?: SidePanelViewId;

  isCollapsed?: boolean;
  isHorizontal?: boolean;
}

const SidePanel = ({
  isCollapsed = false,
  isHorizontal = false,
  views,
  defaultView,
}: SidePanelProps) => {
  return (
    <SidePanelForm isCollapsed={isCollapsed} isHorizontal={isHorizontal}>
      <SidePanelMain views={views} defaultView={defaultView} />
    </SidePanelForm>
  );
};

export default SidePanel;
