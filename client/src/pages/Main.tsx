import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import dateAtom from '../atom/date';
import Navbar from '../components/Navbar';
import DatePicker from '../components/DatePicker';
import { SamshiSaeki } from '../icon/Icon';

export default function Main() {
  const date = useRecoilValue(dateAtom);

  return (
    <>
      <Navbar />
      <Provider>
        <ItemContainer>
          <Img src={SamshiSaeki} alt='SamshiSaeki' />
          <DatePicker />
        </ItemContainer>
      </Provider>
    </>
  );
}

const Img = styled.img``;

const ItemContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Provider = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background: #ffb341;
`;
