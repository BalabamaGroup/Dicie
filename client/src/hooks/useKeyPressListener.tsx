import { useEffect } from 'react';

const useKeyPressListener = ({
  keys,
  onPress,
}: {
  keys: string[];
  onPress: Function;
}) => {
  const onKeyDown = (e: any) => {
    if (keys.some((key) => e.key === key)) onPress();
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);
};

export default useKeyPressListener;
