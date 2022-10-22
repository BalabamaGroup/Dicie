import { useState, useEffect, useRef, useCallback } from "react";
import { inject, observer } from "mobx-react";

export interface HomeProps {
  id?: string;
}

const Home = ({ id }: HomeProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [data, setData] = useState<any>(null);
  const [status, setStatus] = useState("");
  const ws = useRef<WebSocket | null>(null);

  const gettingData = useCallback(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      if (isPaused) return;
      console.log(e);
      const message = JSON.parse(e.data);
      console.log(message);
      setData(message);

      ws.current?.send("TY SAM LOH PONYAL");
    };
  }, [isPaused]);

  useEffect(() => {
    // if (!ws.current) return;
    if (!isPaused) {
      ws.current = new WebSocket("ws://localhost:8080/socket"); // создаем ws соединение
      ws.current.onopen = () => {
        console.log("CONNECTION OPENED");
        setStatus("Соединение открыто");
      }; // callback на ивент открытия соединения
      ws.current.onclose = () => setStatus("Соединение закрыто"); // callback на ивент закрытия соединения
      gettingData();
    }

    return () => ws.current?.close(); // кода меняется isPaused - соединение закрывается
  }, [ws, isPaused, gettingData]);

  return (
    <div>
      {id}
      <h1>Home Page</h1>

      <>
        <div>
          <h2>{status}</h2>
          <p>{`connection ID: ${data?.connectionID}`}</p>
          <p>{`event: ${data?.event}`}</p>
          <p>{`status: ${data?.status}`}</p>
          <p>{`version: ${data?.version}`}</p>
        </div>
      </>

      <button
        onClick={() => {
          ws.current?.close();
          setIsPaused(!isPaused);
        }}
      >
        {!isPaused ? "Остановить соединение" : "Открыть соединение"}
      </button>
    </div>
  );
};

export default inject(({ userStore }) => {
  const { id } = userStore;
  return { id };
})(observer(Home));
