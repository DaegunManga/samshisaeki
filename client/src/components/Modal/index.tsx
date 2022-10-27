import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return <Background>{children}</Background>;
}

const Background = styled.div`
  display: flex;
  width: 100%:
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
`;
