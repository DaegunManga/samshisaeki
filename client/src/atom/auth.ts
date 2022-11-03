import { atom, selector } from 'recoil';
import Client from '../lib/client';

const authAtom = atom<string | null>({
  key: 'auth',
  default: localStorage.getItem('token'),
});

export const authSelector = selector({
  key: 'auth-sel',
  get: ({ get }) => {},
  set: ({ set }, newValue) => {
    if (typeof newValue === 'string') {
      set(authAtom, newValue);
      localStorage.setItem('token', newValue);
      Client.setToken(newValue);
    }
  },
});

export default authAtom;
