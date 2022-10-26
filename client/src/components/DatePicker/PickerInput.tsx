import React from 'react';
import styled from 'styled-components';

interface PickerInputProps {
  value: string;
  onClick: (e: React.MouseEvent) => void;
}

export default function PickerInput({ onClick, value }: PickerInputProps) {
  return <Button onClick={onClick}>{value}</Button>;
}

const Button = styled.button``;
