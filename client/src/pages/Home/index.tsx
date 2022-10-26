import { useState, useEffect, useRef, useCallback } from "react";
import { inject, observer } from "mobx-react";
import { socketUrl } from "../../common/utils/url";

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
      const message = JSON.parse(e.data);
      console.log(message);
      setData(message);
    };
  }, [isPaused]);

  useEffect(() => {
    if (!isPaused) {
      ws.current = new WebSocket(socketUrl());
      ws.current.onopen = () => setStatus("Соединение открыто");
      ws.current.onclose = () => setStatus("Соединение закрыто");
      gettingData();
    }

    return () => ws.current?.close();
  }, [ws, isPaused, gettingData]);

  return (
    <div>
      {id}
      <h1>Home Page</h1>

      <>
        <div>
          <h2>{status}</h2>
          <p>{`data: ${data}`}</p>
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

      <button
        onClick={() => {
          ws.current?.send("TY SAM LOH PONYAL");
        }}
      >
        Send nessage to server
      </button>
    </div>
  );
};

export default inject(({ userStore }) => {
  const { id } = userStore;
  return { id };
})(observer(Home));
