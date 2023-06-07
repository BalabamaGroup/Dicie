import { useEffect } from 'react';

import SidePanel from '@/components/SidePanel';

import useGameStore from '@/stores/GameStore';

import CaptionSetup from './CaptionSetup';
import MemeCreation from './MemeCreation';
import MemeGrading from './MemeGrading';
import * as Styled from './index.styled';

interface GifpacabraProps {}

const Gifpacabra = ({}: GifpacabraProps) => {
  const mePlayer = useGameStore((s) => s.getMePlayer());
  const captionIsSet = !!useGameStore((s) => s.data!.roomDataDto.phrase);
  const allSelectedGif = useGameStore(
    (s) => s.data!.roomDataDto.allUsersSelectGif
  );

  const myTurnLocal =
    (mePlayer.state.isGoing && !captionIsSet) ||
    (captionIsSet && !allSelectedGif);
  const myTurn = useGameStore((s) => s.myTurn);

  useEffect(() => {
    if (myTurnLocal && !myTurn)
      useGameStore.setState((s) => ({ ...s, myTurn: true }));
    else if (!myTurnLocal && myTurn)
      useGameStore.setState((s) => ({ ...s, myTurn: false }));
  }, [myTurnLocal]);

  return (
    <Styled.Memetaur myTurn={myTurn}>
      <Styled.Game myTurn={myTurn}>
        {!captionIsSet ? (
          <CaptionSetup />
        ) : !allSelectedGif ? (
          <MemeCreation />
        ) : (
          <MemeGrading />
        )}
      </Styled.Game>
      <SidePanel views={['chat']} defaultView='chat' />
    </Styled.Memetaur>
  );
};

export default Gifpacabra;
