interface CreateRoomDefaultStateProps {}

const CreateRoomDefaultState = ({}: CreateRoomDefaultStateProps) => {
  return (
    <div>
      <div className='header main'>{`Create your \n own room`}</div>
      <div className='header sub'>And make others obey your will</div>
    </div>
  );
};

export default CreateRoomDefaultState;
