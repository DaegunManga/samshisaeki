import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return <Background>{children}</Background>;
}

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
