import { SidePanelViewId, SidePanelViewIdData } from '@/common/types/sidePanel';
import { size } from '@/common/utils/device';

import SidePanelForm from './forms';
import SidePanelMain from './index.main';

interface SidePanelProps {
  views: SidePanelViewIdData[];
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
  return (
    <SidePanelForm
      collapseThreshhold={collapseThreshhold}
      horizontalThreshhold={horizontalThreshhold}
    >
      <SidePanelMain views={views} defaultView={defaultView} />
    </SidePanelForm>
  );
};

export default SidePanel;
