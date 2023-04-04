import { SidePanelViewId } from '@/common/types/sidePanel';
import { ComponentColor } from '@/common/types/theme';
import useSocketChat from '@/hooks/useSocketChat';

import SidePanelChat from './Chat';

interface SidePanelViewProps {
  view: SidePanelViewId;
  theme: any;
  color: ComponentColor;
}

const SidePanelView = ({ theme, color, view }: SidePanelViewProps) => {
  const { messages: chatData, actions } = useSocketChat();

  if (view === 'chat' || view === 'guessBooAnswers') {
    if (view === 'chat' && chatData)
      return (
        <SidePanelChat
          color={color}
          theme={theme}
          chatData={chatData}
          chatActions={actions}
        />
      );
    if (view === 'guessBooAnswers')
      return (
        <SidePanelChat
          theme={theme}
          color={color}
          chatData={chatData}
          chatActions={actions}
        />
      );
  }

  return null;
};

export default SidePanelView;
