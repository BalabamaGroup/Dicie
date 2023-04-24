import { useEffect } from 'react';

interface useKeyPressListenerProps {
  keyCode: string;
  onPress: Function;
}

const useKeyPressListener = ({
  keyCode,
  onPress,
}: useKeyPressListenerProps) => {
  useEffect(() => {
    const keyPressListener = (event: any) => {
      if (event.code === keyCode) onPress();
    };

    document.addEventListener('keydown', keyPressListener);
    return () => document.removeEventListener('keydown', keyPressListener);
  }, []);
};

export default useKeyPressListener;
