import { atom } from 'jotai';

export const darkThemeAtom = atom<boolean>(
  window.matchMedia('(prefers-color-scheme: dark)').matches,
);
