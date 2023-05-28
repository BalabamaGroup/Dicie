import useGameStore from '@/stores/GameStore';

import MyTurn from './MyTurn';
import OthersTurn from './OthersTurn';

const CaptionSetup = () => {
  const myTurn = useGameStore((s) => s.myTurn);
  return myTurn ? <MyTurn /> : <OthersTurn />;
};

export default CaptionSetup;
