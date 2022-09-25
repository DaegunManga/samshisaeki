import { atom } from 'recoil';

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
  adminKey: string;
}

const userAtom = atom<UserAtomType>({
  key: 'user',
  default: {
    isLoggedIn: false,
  },
});

export default userAtom;
