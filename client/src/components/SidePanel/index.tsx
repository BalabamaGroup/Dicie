import { ComponentColor } from '@/common/types/theme';

import SidePanelForm from './forms';
import SidePanelMain from './index.main';

interface SidePanelProps {
  color: ComponentColor;
  isCollapsed?: boolean;
  isHorizontal?: boolean;
}

const SidePanel = ({
  color,
  isCollapsed = false,
  isHorizontal = false,
}: SidePanelProps) => {
  return (
    <SidePanelForm
      color={color}
      isCollapsed={isCollapsed}
      isHorizontal={isHorizontal}
    >
      <SidePanelMain color={color} />
    </SidePanelForm>
  );
};

export default SidePanel;
