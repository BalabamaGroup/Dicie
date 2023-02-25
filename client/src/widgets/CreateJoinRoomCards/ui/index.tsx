import { useCreateJoinRoomCards } from '../model/useCreateJoinRoomCards';
import CreateRoomCard from './CreateRoom';
import * as Styled from './index.styled';
import JoinRoomCard from './JoinRoom';

const CreateJoinRoomCards = () => {
  const selectedCard = useCreateJoinRoomCards((state) => state.selectedCard);

  const onSelectCreateRoomCard = useCreateJoinRoomCards(
    (state) => state.setCreateRoom
  );

  const onSelectJoinRoomCard = useCreateJoinRoomCards(
    (state) => state.setJoinRoom
  );

  return (
    <Styled.ContentCardsWrapper selectedCard={selectedCard}>
      <Styled.ContentCards selectedCard={selectedCard}>
        <CreateRoomCard
          selectedCard={selectedCard}
          onSelect={onSelectCreateRoomCard}
        />
        <JoinRoomCard
          selectedCard={selectedCard}
          onSelect={onSelectJoinRoomCard}
        />
      </Styled.ContentCards>
    </Styled.ContentCardsWrapper>
  );
};

export default CreateJoinRoomCards;
