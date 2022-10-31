import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomAPI from "../../api/room";
import UserAPI from "../../api/user";
import User from "../../common/types/user";
import useRoomConnectionSocket from "../../hooks/useRoomConnectionSocket";

const Room = () => {
  const { roomId } = useParams();
  const [socket, data, status] = useRoomConnectionSocket();

  const [users, setUsers] = useState<User[] | []>([]);

  useEffect(() => {
    const conectToRoom = async () => {
      //   const currUser = await UserAPI.getCurrentUser();
      roomId &&
        RoomAPI.connectToRoom(roomId)
          .then(() => console.log("CONNECTED"))
          .catch(() => (window.location.href = "/"));
    };
    conectToRoom();
  }, [roomId]);

  const onDisconnect = async () => {
    if (roomId) await RoomAPI.disconnectFromRoom(roomId);
    window.location.href = `/`;
  };

  const onStartGame = async () => {
    if (roomId) await RoomAPI.startGame(roomId);
  };

  const onFinishGame = async () => {
    if (roomId) await RoomAPI.finishGame(roomId);
  };

  const updateUsers = (e: any, userId: number) => {
    console.log(users);
    const newUsers = users.map((user) =>
      user.id === userId
        ? { ...user, state: { ...user.state, word: e.target.value } }
        : user
    );

    setUsers(newUsers);
  };

  const pushUsers = (userId: number) => {
    const [user] = users.filter((user) => user.id === userId);
    console.log("USER TO PUSH", user);
    if (typeof user.state?.word === "string")
      RoomAPI.setSharadeWord(user.id, { word: user.state.word });
  };

  useEffect(() => {
    console.log("DATA CHANGE", data);

    if (data?.users) {
      console.log("USERS DATA CHAGNE");
      const newUsers = data.users.map((user: User) => {
        const [existingUser] = users.filter((eU: User) => user.id === eU.id);
        if (existingUser) return { ...existingUser, state: user.state };
        return user;
      });

      console.log("useEffect", newUsers);
      setUsers(newUsers);
    }
  }, [data]);

  return (
    <div>
      <h3>
        {users &&
          users.map((user: User) => (
            <div key={user.id}>
              <p>
                username: {user.username} <br /> email: {user.email} <br />
              </p>

              {+sessionStorage.id === user.id && <span>ME {"     "}</span>}

              <input
                type="text"
                disabled={+sessionStorage.id === user.id}
                value={
                  //   user.state?.word
                  (+sessionStorage.id === user.id
                    ? user.state?.isFinished
                      ? user.state?.word
                      : ""
                    : user.state?.word) || ""
                }
                onChange={(e) => updateUsers(e, user.id)}
              />

              <button onClick={() => pushUsers(user.id)}>Set word</button>
            </div>
          ))}
      </h3>

      <br />
      <br />
      <br />

      <button onClick={onDisconnect}>Disconnect</button>

      <br />
      <br />
      <br />

      {data && !data.start ? (
        <button onClick={onStartGame}>Start game</button>
      ) : (
        <button onClick={onFinishGame}>Finish game</button>
      )}
    </div>
  );
};

export default Room;
