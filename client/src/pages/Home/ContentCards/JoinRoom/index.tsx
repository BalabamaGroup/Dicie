import { useState } from 'react';
import { ReactSVG } from 'react-svg';

import Input from '@/components/Input';

import useUserStore from '../../../../stores/UserStore';
import AlreadyInRoom from './AlreadyInRoom';
import GameSelector from './GameSelector';
import * as Styled from './index.styled';
import RoomsTable from './RoomsTable';

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

        <div className='search-wrapper'>
          <Input
            value={searchValue}
            onChange={onChangeSearchValue}
            placeholder='Search rooms...'
          />
        </div>

        <GameSelector
          selectedGames={selectedGames}
          onToggleGameSelection={onToggleGameSelection}
        />

        <RoomsTable searchValue={searchValue} selectedGames={selectedGames} />
      </div>
    </Styled.JoinRoomCard>
  );
};

export default JoinRoomCard;
