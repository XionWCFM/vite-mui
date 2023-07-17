import { darkThemeAtom } from '@/atom';
import { Button } from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';

interface DarkToggleButtonProps {
  children: React.ReactNode;
}

const DarkToggleButton = ({ children }: DarkToggleButtonProps) => {
  const [isDark, setIsDark] = useAtom(darkThemeAtom);

  return <Button>{children}</Button>;
};

export default DarkToggleButton;
