import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt } from 'react-icons/fa';

interface PickerInputProps {
  value: string;
  onClick: (e: React.MouseEvent) => void;
}

export default function PickerInput({ onClick, value }: PickerInputProps) {
  return (
    <Button onClick={onClick}>
      <IconWrapper>
        <FaCalendarAlt />
      </IconWrapper>
      <ValueWrapper>{value}</ValueWrapper>
    </Button>
  );
}

const IconWrapper = styled.span`
  font-size: 1.2rem;
  padding-top: 0.1rem;
`;

const ValueWrapper = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-left: 0.3rem;
`;

const Button = styled.button`
  display: flex;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  background: white;
  border: none;
  border-radius: 7.5px;
  align-items: center;
  margin-top: 1.75rem;
  cursor: pointer;
`;
