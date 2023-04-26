import { ChatData } from './chat';

export type SidePanelViewId = 'chat' | 'guessBooAnswers' | 'notes';

export type SidePanelView = {
  id: SidePanelViewId;
  label: string;
};

export type GuessBooAnswersData = {
  question: string;
  answer: 'YES' | 'NO' | 'WTF';
}[];
