import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { nthSelector } from '../../atom/nth';
import useSubscribeNoti from '../../hooks/useSubscribeNoti';

export default function Banner() {
  const nthMsg = useRecoilValue(nthSelector);

  return <BannerTemplate message={nthMsg!}></BannerTemplate>;
}

export function BannerTemplate({ message }: { message: string }) {
  const { subscribe } = useSubscribeNoti();

  const onClickButton: React.MouseEventHandler = async (e) => {
    e.preventDefault();

    subscribe();
  };

  return (
    <Wrapper>
      <Message>{message}</Message>
      <Button onClick={onClickButton}>알림톡으로 알림받기</Button>
    </Wrapper>
  );
}

const Button = styled.button`
  background: #fff963;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  @media screen and (max-width: 528px) {
    font-size: 0.9rem;
  }
  font-weight: bold;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
  margin-bottom: 4rem;
`;

const Message = styled.h1`
  font-size: 2.5rem;
  @media screen and (max-width: 528px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.75rem;
  }
  font-weight: bold;
  margin-top: 11.25rem;
  margin-bottom: 7rem;
`;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background: #fbcbff;
  flex-direction: column;
  align-items: center;
`;
