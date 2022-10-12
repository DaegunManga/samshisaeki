import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { SamshiSaeki } from '../icon/Icon';

export default function Main() {
  return (
    <>
      <Navbar />
      <Provider>
        <ItemContainer>
          <Img src={SamshiSaeki} alt='SamshiSaeki' />
        </ItemContainer>
      </Provider>
    </>
  );
}

const Img = styled.img``;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Provider = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background: #ffb341;
`;
