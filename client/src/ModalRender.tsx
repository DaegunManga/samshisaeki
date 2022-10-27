import React from 'react';
import { useRecoilValue } from 'recoil';
import modalAtom from './atom/modal';
import LoginForm from './components/LoginForm';
import Modal from './components/Modal';
import useScrollLock from './hooks/useScrollLock';
import Portal from './Portal';

export default function ModalRender() {
  const modal = useRecoilValue(modalAtom);

  useScrollLock();

  if (!modal.isOpened) {
    return <></>;
  }

  return (
    <Portal>
      <Modal>{modal.type === 'login' ? <LoginForm /> : <></>}</Modal>
    </Portal>
  );
}
