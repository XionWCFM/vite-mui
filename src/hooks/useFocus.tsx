import { useEffect, useRef } from 'react';

const useFocus = () => {
  const element = useRef<HTMLInputElement>(null);
  useEffect(() => {
    element.current?.focus();
  }, []);
};

export default useFocus;
