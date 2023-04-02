import { SidePanelViewId, SidePanelViewIdData } from '@/common/types/sidePanel';
import { ComponentColor } from '@/common/types/theme';

import SidePanelForm from './forms';
import SidePanelMain from './index.main';

interface SidePanelProps {
  views: SidePanelViewIdData[];
  defaultView?: SidePanelViewId;

  color: ComponentColor;
  isCollapsed?: boolean;
  isHorizontal?: boolean;
}

const SidePanel = ({
  color,
  isCollapsed = false,
  isHorizontal = false,
  views,
  defaultView,
}: SidePanelProps) => {
  return (
    <SidePanelForm
      color={color}
      isCollapsed={isCollapsed}
      isHorizontal={isHorizontal}
    >
      <SidePanelMain views={views} defaultView={defaultView} color={color} />
    </SidePanelForm>
  );
};

export default SidePanel;
