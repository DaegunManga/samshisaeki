import { atom, selector } from 'recoil';

const dateAtom = atom<Date>({
  key: 'date',
  default: new Date(),
});

export const dateSelector = selector({
  key: 'date-sel',
  get: ({ get }) => {
    const date = get(dateAtom);
    return date.toISOString().split('T')[0];
  },
});

export default dateAtom;
