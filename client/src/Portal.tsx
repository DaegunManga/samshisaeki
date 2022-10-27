import React from 'react';
import reactDom from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
}

export default function Portal({ children }: PortalProps) {
  const el = document.getElementById('modal') as HTMLElement;
  return reactDom.createPortal(children, el);
}
