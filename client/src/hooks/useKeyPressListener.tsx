import { useEffect } from 'react';

const useKeyPressListener = ({
  keys,
  onPress,
}: {
  keys: string[];
  onPress: any;
}) => {
  const onKeyDown = (e: any) => {
    if (keys.some((key) => e.key === key)) onPress(e);
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);
};

export default useKeyPressListener;
