import { atom, selector } from 'recoil';

type UserAtomType = UserAtomLoggedIn | UserAtomNotLoggedIn;

interface UserAtomLoggedIn {
  isLoggedIn: true;
  user: User;
}

interface UserAtomNotLoggedIn {
  isLoggedIn: false;
}

interface User {
  username: string;
  nickname: string;
}

const userAtom = atom<UserAtomType>({
  key: 'user',
  default: {
    isLoggedIn: false,
  },
});

export const userSelector = selector<User>({
  key: 'user-sel',
  get: () => {
    return JSON.parse(localStorage.getItem('user') || '{}') as User;
  },
  set: ({ set }, newValue) => {
    if (typeof newValue === 'object') {
      localStorage.setItem('user', JSON.stringify(newValue));
    }

    set(userAtom, {
      isLoggedIn: true,
      user: newValue as User,
    });
  },
});

export default userAtom;
