import { ReactSVG } from 'react-svg';
import { homeContentCards } from '@/common/constants';
import * as Styled from './index.styled';

interface CreateRoomCardProps {
  selectedCard: string;
  onOrClick: React.MouseEventHandler<HTMLDivElement>;
}

const OrLabel = ({ selectedCard, onOrClick }: CreateRoomCardProps) => {
  return (
    <Styled.OrLabel selectedCard={selectedCard} onClick={onOrClick}>
      {/* <div className="angles angles-top">
        <div className="bg">
          <div className="angle top left top-left"></div>
          <div className="angle top right top-right"></div>
        </div>
      </div> */}

      <div className='main'>
        {selectedCard === homeContentCards.DEFAULT ? (
          'OR'
        ) : (
          <ReactSVG src={'/images/svgs/arrow.up.svg'} />
        )}
      </div>
      {/* 
      <div className="angles">
        <div className="bg">
          <div className="angle bottom left bottom-left"></div>
          <div className="angle bottom right bottom-right"></div>
        </div>
      </div> */}
    </Styled.OrLabel>
  );
};

export default OrLabel;
