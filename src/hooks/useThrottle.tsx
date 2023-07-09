import { useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useThrottle<T extends any[]>(
  callback: (...params: T) => void,
  time: number,
) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...params: T) => {
    if (!timer.current) {
      timer.current = setTimeout(() => {
        callback(...params);
        timer.current = null;
      }, time);
    }
  };
}

export default useThrottle;
