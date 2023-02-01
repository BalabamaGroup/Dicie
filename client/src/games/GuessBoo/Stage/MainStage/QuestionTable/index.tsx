import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import CharadesAPI from '@/shared/api/game/charades';
import { UserInGame } from '@/shared/types/user';

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
    {}
  );

  useEffect(() => {
    window.addEventListener('answerAccept', () => myTableDataRefetch());
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
      }}
    >
      {myTableData &&
        myTableData.map((tableData, i) => (
          <div
            key={i}
            style={{
              height: '25px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '20px',
              color: 'black',
              background:
                tableData.answer === 'YES'
                  ? 'lightgreen'
                  : tableData.answer === 'NO'
                  ? 'lightred'
                  : 'lightgrey',
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
