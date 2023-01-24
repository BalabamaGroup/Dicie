import { useState } from 'react';

import CharadesAPI from '@/api/game/charades';
import { UserInGame } from '@/common/types/user';
import Button from '@/components/Button';
import Input from '@/components/Input';

import ConfirmUserSelection from './ConfirmUserSelection';
import ReadyButton from './ReadyButton';
import SetCharacter from './SetCharacter';
import SetNotReady from './SetNotReady';
import SetReady from './SetReady';

interface BottomContentProps {
  highlightedUser: UserInGame;
  selectedUser: UserInGame;

  isUserHighlighted: boolean;
  isUserSelected: boolean;
  isCharacterSet: boolean;
  isReady: boolean;
}

const BottomContent = ({
  highlightedUser,
  selectedUser,
  isUserHighlighted,
  isUserSelected,
  isCharacterSet,
  isReady,
}: BottomContentProps) => {
  let content: any = [];

  if (isUserHighlighted)
    content = <ConfirmUserSelection highlightedUser={highlightedUser} />;

  if (isUserSelected) content = <SetCharacter selectedUser={selectedUser} />;

  if (isCharacterSet) content = <SetReady selectedUser={selectedUser} />;

  if (isReady) content = <SetNotReady />;

  return <div className='bottom-content'>{content}</div>;
};

export default BottomContent;
