import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import modalAtom from '../../atom/modal';

interface ButtonProps {
  value: string;
  to?: string;
}

export default function Button({ value, to }: ButtonProps) {
  const navigate = useNavigate();
  const setModal = useSetRecoilState(modalAtom);

  const onButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (to) {
        return navigate(to);
      }
      setModal({
        isOpened: true,
        type: 'login',
      });
    },
    [navigate, to, setModal]
  );

  return <ButtonEl onClick={onButtonClick}>{value}</ButtonEl>;
}

const ButtonEl = styled.button`
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1.5rem;
  background: white;
  color: black;
  outline: none;
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;
