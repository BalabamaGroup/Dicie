import { homeContentCards } from '@/common/constants';

import CreateRoomDefaultState from './DefaultState';
import * as Styled from './index.styled';
import CreateRoomSelectedState from './SelectedState';

interface CreateRoomCardProps {
  selectedCard: string;
  onSelect: React.ReactEventHandler<HTMLDivElement>;
}

const CreateRoomCard = ({ selectedCard, onSelect }: CreateRoomCardProps) => {
  return (
    <Styled.CreateRoomCard
      cardKey={homeContentCards.CREATE_ROOM}
      selectedCard={selectedCard}
      {...(selectedCard !== homeContentCards.CREATE_ROOM && {
        onClick: onSelect,
      })}
      // onClick={
      //   selectedCard !== homeContentCards.CREATE_ROOM ? onSelect : () => {}
      // }
    >
      {selectedCard === homeContentCards.DEFAULT ? (
        <CreateRoomDefaultState />
      ) : (
        <CreateRoomSelectedState />
      )}
    </Styled.CreateRoomCard>
  );
};

export default CreateRoomCard;
