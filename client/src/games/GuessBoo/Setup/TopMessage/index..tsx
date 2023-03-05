import styled from 'styled-components';

interface TopMessageProps {
  isCurrentUserTurn: boolean;
  isUserSelected: boolean;
  isCharacterSet: boolean;
  isReady: boolean;
}

const TopMessage = ({
  isCurrentUserTurn,
  isUserSelected,
  isCharacterSet,
  isReady,
}: TopMessageProps) => {
  let message = 'Wait for your turn to pick a player';

  if (isCurrentUserTurn)
    message = 'Pick a player that you would like to write a charater to';

  if (isUserSelected)
    message = 'Think of some cool character and write it down';

  if (isCharacterSet)
    message = `When you have made your choice, click the "I am Ready" button.`;

  if (isReady)
    message =
      'Great \n Now, wait for other otherPlayers and get ready to play \n Guess BOO!!!';

  return <div className='top-message'>{message}</div>;
};

export default TopMessage;
