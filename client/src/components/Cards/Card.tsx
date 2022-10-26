import React from 'react';
import styled from 'styled-components';

interface CardProps {
  date: string;
  menu?: string[];
}

export default function Card({ date, menu }: CardProps) {
  if (!menu) {
    return (
      <Provider>
        <Error>급식이 없습니다</Error>
      </Provider>
    );
  }

  return (
    <Provider>
      <Title>{date}</Title>
      {menu.map((m, i) => (
        <Menu key={i}>{m}</Menu>
      ))}
    </Provider>
  );
}

const Error = styled.span``;

const Title = styled.span``;

const Menu = styled.span``;

const Provider = styled.div``;
