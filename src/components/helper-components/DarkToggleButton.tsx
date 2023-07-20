import { darkThemeAtom } from '@/atom';
import { Button } from '@mui/material';
import { useSetAtom } from 'jotai';
import React from 'react';

interface DarkToggleButtonProps {
  children: React.ReactNode;
}

const DarkToggleButton = ({ children }: DarkToggleButtonProps) => {
  const setIsDark = useSetAtom(darkThemeAtom);
  return (
    <Button
      onClick={() => {
        setIsDark((state) => !state);
      }}
    >
      {children}{' '}
    </Button>
  );
};

export default DarkToggleButton;
