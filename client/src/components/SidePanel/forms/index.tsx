import { ComponentColor } from '@/common/types/theme';

import CollapsedForm from './Collapsed';
import FullForm from './FullForm';

interface SidePanelFormProps {
  color: ComponentColor;
  isCollapsed: boolean;
  isHorizontal: boolean;
  children: React.ReactNode;
}

const SidePanelForm = ({
  color,
  isCollapsed,
  isHorizontal,
  children,
}: SidePanelFormProps) => {
  if (isCollapsed)
    return (
      <CollapsedForm color={color} isHorizontal={isHorizontal}>
        {children}
      </CollapsedForm>
    );

  return <FullForm>{children}</FullForm>;
};

export default SidePanelForm;
