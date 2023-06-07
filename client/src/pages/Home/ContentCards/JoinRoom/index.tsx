import { useState } from 'react';
import { ReactSVG } from 'react-svg';

import Input from '@/components/Input';

import useUserStore from '../../../../stores/UserStore';
import AlreadyInRoom from './AlreadyInRoom';
import EnterPassword from './EnterPassword';
import GameSelector from './GameSelector';
import RoomsTable from './RoomsTable';
import * as Styled from './index.styled';

interface JoinRoomCardProps {
  isSelected: boolean;
  isDefault: boolean;
  onSelect: React.ReactEventHandler<HTMLDivElement>;
}

const JoinRoomCard = ({
  isSelected,
  isDefault,
  onSelect,
}: JoinRoomCardProps) => {
  const user = useUserStore((s) => s.user);

  const [searchValue, setSearchValue] = useState<string>('');
  const onChangeSearchValue = (e: any) => {
    setSearchValue(e.target.value);
  };

  const [selectedGames, setSelectedGames] = useState<number[]>([]);
  const onToggleGameSelection = (id: number) => {
    if (!selectedGames.includes(id)) setSelectedGames([...selectedGames, id]);
    else setSelectedGames(selectedGames.filter((gameId) => gameId !== id));
  };

  const [enterPasswordIsVisible, setEnterPasswordIsVisible] =
    useState<boolean>(false);
  const onCancelEnterPassword = async () => setEnterPasswordIsVisible(false);

  const [connectRoomID, setConnectRoomID] = useState<string | null>(null);

  return (
    <Styled.JoinRoomCard
      isSelected={isSelected}
      isDefault={isDefault}
      onClick={onSelect}
    >
      <div className='on-default'>
        <div className='header main'>{`Join an \n existing one`}</div>
        <div className='header sub'>
          And bring terror to all the living inside
        </div>
      </div>

      <ReactSVG
        className='notselected-arrow'
        src='/images/svgs/arrow.right.svg'
      />

      <div className='on-selected'>
        {user?.roomId && <AlreadyInRoom />}

        {enterPasswordIsVisible && (
          <EnterPassword
            onClose={onCancelEnterPassword}
            roomId={connectRoomID}
          />
        )}

        <div className='search-wrapper'>
          <Input
            color='indigo'
            value={searchValue}
            onChange={onChangeSearchValue}
            placeholder='Search rooms...'
          />
        </div>

        <GameSelector
          selectedGames={selectedGames}
          onToggleGameSelection={onToggleGameSelection}
        />

        <RoomsTable
          searchValue={searchValue}
          selectedGames={selectedGames}
          setConnectRoomID={setConnectRoomID}
          setEnterPasswordIsVisible={setEnterPasswordIsVisible}
        />
      </div>
    </Styled.JoinRoomCard>
  );
};

export default JoinRoomCard;
