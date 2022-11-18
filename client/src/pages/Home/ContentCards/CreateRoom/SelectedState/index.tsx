import { useState } from 'react';

import { size } from '@/common/utils/device';
import useWindowWidth from '@/hooks/useWindowWidth';

import ChooseGame from './ChooseGame';
import * as Styled from './index.styled';
import RoomSetupForm from './SetupRoom';

interface CreateRoomSelectedStateProps {}

const CreateRoomSelectedState = ({}: CreateRoomSelectedStateProps) => {
  const [setupFormCompleted, setSetupFormCompleted] = useState<boolean>(false);
  const onToggleSetupFormCompleted = () =>
    setSetupFormCompleted(!setupFormCompleted);

  const [chosenGameID, setChosenGameID] = useState<number | null>(null);
  const onChoosegame = (gameId: number) => setChosenGameID(gameId);

  const windowWindth = useWindowWidth(100);
  return windowWindth < size.tablet ? (
    <Styled.SelectedStateMobileView>
      {!setupFormCompleted ? (
        <RoomSetupForm
          isMobileView
          onToggleSetupFormCompleted={onToggleSetupFormCompleted}
        />
      ) : (
        <ChooseGame />
      )}
    </Styled.SelectedStateMobileView>
  ) : (
    <Styled.SelectedStateDesktopView>
      <RoomSetupForm />
      <ChooseGame />
    </Styled.SelectedStateDesktopView>
  );
};

export default CreateRoomSelectedState;
