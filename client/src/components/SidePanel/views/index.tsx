import { SidePanelViewId } from '@/common/types/sidePanel';
import useChatStore from '@/stores/ChatStore';

import Chat from './Chat';
import GuessBooAnswers from './GuessBooAnswers';
import Notes from './Notes';

interface SidePanelViewProps {
  view: SidePanelViewId;
}

const SidePanelView = ({ view }: SidePanelViewProps) => {
  useChatStore((s) => s.subscribe());

  if (view === 'chat' || view === 'guessBooAnswers' || view === 'notes') {
    if (view === 'chat') return <Chat />;
    if (view === 'guessBooAnswers') return <GuessBooAnswers />;
    if (view === 'notes') return <Notes />;
  }

  return null;
};

export default SidePanelView;
