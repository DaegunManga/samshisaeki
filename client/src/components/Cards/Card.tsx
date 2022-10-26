import React from 'react';
import styled from 'styled-components';

interface CardProps {
  date: string;
  menu?: string[];
  loading?: boolean;
}

export default function Card({ date, menu, loading }: CardProps) {
  if (loading) {
    return (
      <Provider isLoadingOrError>
        <Error>로딩중입니다</Error>
      </Provider>
    );
  }

  if (!menu) {
    return (
      <Provider isLoadingOrError>
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

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  padding-top: 2.25rem;
  margin-bottom: 1rem;
`;

const Menu = styled.p`
  padding-left: 2.25rem;
  margin-top: 0.5rem;
`;

const Provider = styled.div<{ isLoadingOrError?: boolean }>`
  width: 16.875rem;
  height: 22.25rem;
  background: #f9f9f9;
  color: #292929;
  border-radius: 10px;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  ${(props) =>
    props.isLoadingOrError &&
    'display: flex; justify-content: center; align-items: center;'}
`;
