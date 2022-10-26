import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import DatePicker from '../components/DatePicker';
import { SamshiSaeki } from '../icon/Icon';
import Cards, { LoadingCards } from '../components/Cards';
import Banner, { BannerTemplate } from '../components/Banner';

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
          <React.Suspense fallback={<LoadingCards />}>
            <Cards />
          </React.Suspense>
        </ItemContainer>
        <React.Suspense
          fallback={<BannerTemplate message='급식순서를 불러오고 있습니다' />}
        >
          <Banner />
        </React.Suspense>
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
  flex-direction: column;
`;
