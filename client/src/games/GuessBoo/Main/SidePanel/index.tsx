import * as Styled from './index.styled';
import SidePanelHeader from './SidePanelHeader';

interface SidePanelProps {}

const SidePanel = ({}: SidePanelProps) => {
  return (
    <Styled.SidePanelWrapper>
      <Styled.SidePanel>
        <SidePanelHeader
          tabs={[
            {
              id: 0,
              label: 'Answers',
              onClick: () => {},
              defaultChoice: false,
            },
            {
              id: 1,
              label: 'Chat',
              onClick: () => {},
              defaultChoice: true,
            },
          ]}
        />
      </Styled.SidePanel>
    </Styled.SidePanelWrapper>
  );
};

export default SidePanel;
