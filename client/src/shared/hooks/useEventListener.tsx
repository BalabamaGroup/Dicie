import { useEffect, useRef } from 'react';

interface useEventListenerProps {
  id: string;
  handler: any;
  element?: any;
}

const useEventListener = ({
  id,
  handler,
  element = window,
}: useEventListenerProps) => {
  const savedHandler: any = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (e: any) =>
      !!savedHandler.current && savedHandler.current(e);

    element.addEventListener(id, eventListener);
    return () => element.removeEventListener(id, eventListener);
  }, [id, element]);
};

export default useEventListener;
