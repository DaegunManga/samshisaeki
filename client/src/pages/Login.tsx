import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    <>
      <Navbar />
      <Provider>
        <LoginForm />
      </Provider>
    </>
  );
}

const Provider = styled.div`
  width: 100vw;
  height: 100%;
  background: #ffb341;
`;
