import { ChatData } from './chat';

export type SidePanelViewId = 'chat' | 'guessBooAnswers';

export type SidePanelViewIdData =
  | {
      id: 'chat';
    }
  | {
      id: 'guessBooAnswers';
      data: GuessBooAnswersData;
    };

export type SidePanelView = {
  id: SidePanelViewId;
  label: string;
};

export type GuessBooAnswersData = {
  question: string;
  answer: 'YES' | 'NO' | 'WTF';
}[];
