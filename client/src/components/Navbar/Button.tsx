import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  value: string;
  to: string;
}

export default function Button({ value, to }: ButtonProps) {
  const navigate = useNavigate();

  const onButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      navigate(to);
    },
    [navigate, to]
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
