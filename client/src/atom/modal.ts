import React from 'react';
import { atom } from 'recoil';

type ModalType = 'login' | 'register';

interface ModalAtom {
  isOpened: boolean;
  type: ModalType;
  ref?: React.MutableRefObject<HTMLElement>;
}

const modalAtom = atom<ModalAtom>({
  key: 'modal',
  default: {
    isOpened: true,
    type: 'login',
  },
});

export default modalAtom;
