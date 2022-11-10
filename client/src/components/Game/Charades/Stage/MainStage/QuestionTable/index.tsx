import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import CharadesAPI from '../../../../../../api/game/charades';
import { UserInGame } from '../../../../../../common/types/user';

interface QuestionTableProps {
  currentUserPlayer: UserInGame;
}

const QuestionTable = ({ currentUserPlayer }: QuestionTableProps) => {
  const {
    data: myTableData,
    error: currentRoomIdError,
    isLoading: currentRoomIdIsLoading,
    refetch: myTableDataRefetch,
  } = useQuery(
    'myTable',
    async () => {
      const myHistory = await CharadesAPI.getHistory(currentUserPlayer.id);
      return myHistory;
    },
    { refetchOnWindowFocus: false, enabled: false }
  );

  useEffect(() => {
    window.addEventListener('answerAccept', () => {
      console.log('EVENT answerAccept');
      myTableDataRefetch();
    });
    return () =>
      window.removeEventListener('answerAccept', () => myTableDataRefetch());
  }, []);

  if (!myTableData?.length) return <div>No questinons were asked</div>;
  return (
    <div
      style={{
        margin: '20px auto',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid teal',
        gap: '10px',
      }}
    >
      {myTableData &&
        myTableData.map((tableData) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: '20px',
            }}
          >
            <div>{tableData.question}</div>
            <div>{tableData.answer}</div>
          </div>
        ))}
    </div>
  );
};

export default QuestionTable;
