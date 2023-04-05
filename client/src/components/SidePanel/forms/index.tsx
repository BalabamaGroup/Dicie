import CollapsedForm from './Collapsed';
import FullForm from './FullForm';

interface SidePanelFormProps {
  isCollapsed: boolean;
  isHorizontal: boolean;
  children: React.ReactNode;
}

const SidePanelForm = ({
  isCollapsed,
  isHorizontal,
  children,
}: SidePanelFormProps) => {
  if (isCollapsed)
    return (
      <CollapsedForm isHorizontal={isHorizontal}>{children}</CollapsedForm>
    );

  return <FullForm>{children}</FullForm>;
};

export default SidePanelForm;
