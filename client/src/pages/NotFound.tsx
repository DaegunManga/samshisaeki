import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

export default function NotFound() {
  const navigate = useNavigate();

  const onButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      navigate('/');
    },
    [navigate]
  );

  return (
    <>
      <Navbar />
      <Container>
        <div>
          <Title>NOT FOUND</Title>
          <Description>페이지를 찾을 수 없어요</Description>
          <Button onClick={onButtonClick}>식단 보러가기</Button>
        </div>
      </Container>
    </>
  );
}

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: #faeec0;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
  color: #faeec0;
`;

const Button = styled.button`
  color: white;
  background: #12b886;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  place-items: center;
  display: grid;
  background: #ffb341;
  width: 100vw;
  height: 100vh;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  z-index: -1;
`;
