import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import DatePicker from '../components/DatePicker';
import { SamshiSaeki } from '../icon/Icon';
import Cards from '../components/Cards';

export default function Main() {
  return (
    <>
      <Navbar />
      <Provider>
        <ItemContainer>
          <Img src={SamshiSaeki} alt='SamshiSaeki' />
          <PickerProvider>
            <DatePicker />
          </PickerProvider>
          <React.Suspense fallback={<span>Loading ...</span>}>
            <Cards />
          </React.Suspense>
        </ItemContainer>
      </Provider>
    </>
  );
}

const Img = styled.img``;

const PickerProvider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
