import { atom } from 'recoil';

type ModalType = 'login' | 'register';

interface ModalAtom {
  isOpened: boolean;
  type: ModalType;
}

const modalAtom = atom<ModalAtom>({
  key: 'modal',
  default: {
    isOpened: false,
    type: 'login',
  },
});

export default modalAtom;
