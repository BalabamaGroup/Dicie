import { SidePanelViewId } from '@/common/types/sidePanel';
import useChatStore from '@/stores/ChatStore';

import SidePanelChat from './Chat';
import GuessBooAnswers from './GuessBooAnswers';

interface SidePanelViewProps {
  view: SidePanelViewId;
}

const SidePanelView = ({ view }: SidePanelViewProps) => {
  if (view === 'chat' || view === 'guessBooAnswers') {
    useChatStore((s) => s.subscribe());
    if (view === 'chat') return <SidePanelChat />;
    if (view === 'guessBooAnswers') return <GuessBooAnswers />;
  }
  return null;
};

export default SidePanelView;
