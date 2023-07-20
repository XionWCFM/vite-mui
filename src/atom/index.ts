import { atom } from 'jotai';

export const darkThemeAtom = atom(
  window.matchMedia('(prefers-color-scheme: dark)').matches || false,
);
