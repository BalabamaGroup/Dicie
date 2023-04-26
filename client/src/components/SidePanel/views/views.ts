import { SidePanelView, SidePanelViewId } from '@/common/types/sidePanel';

import Chat from './Chat/index';

export const views: SidePanelView[] = [
  {
    id: 'chat',
    label: 'Chat',
  },
  {
    id: 'guessBooAnswers',
    label: 'Answers',
  },
  {
    id: 'notes',
    label: 'Notes',
  },
];

export const getViewById = (id: SidePanelViewId): SidePanelView => {
  const [resultView] = views.filter((v) => v.id === id);
  return resultView;
};

export const getLabelById = (id: SidePanelViewId): string => {
  const [resultView] = views.filter((v) => v.id === id);
  return resultView.label;
};
