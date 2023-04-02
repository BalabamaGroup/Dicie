import { SidePanelViewId } from '@/common/types/sidePanel';
import useSocketChat from '@/hooks/useSocketChat';

import SidePanelChat from './Chat';

interface SidePanelViewProps {
  view: SidePanelViewId;
}

const SidePanelView = ({ view }: SidePanelViewProps) => {
  if (view === 'chat' || view === 'guessBooAnswers') {
    const { messages: chatData, actions } = useSocketChat();

    if (view === 'chat' && chatData)
      return <SidePanelChat chatData={chatData} chatActions={actions} />;
    if (view === 'guessBooAnswers')
      return <SidePanelChat chatData={chatData} chatActions={actions} />;
  }

  return null;
};

export default SidePanelView;
