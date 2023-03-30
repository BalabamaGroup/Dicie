import Switch from '@/components/Switch';

import * as Styled from './index.styled';

interface SidePanelHeaderProps {
  tabs: Array<{
    id: number | string;
    label: string;
    onClick?: Function;
    defaultChoice?: boolean;
  }>;
}

const SidePanelHeader = ({ tabs }: SidePanelHeaderProps) => {
  return (
    <Styled.SidePanelHeader>
      <Switch color='indigo' options={tabs} />
    </Styled.SidePanelHeader>
  );
};

export default SidePanelHeader;
