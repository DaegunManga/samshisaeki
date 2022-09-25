import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import userAtom from '../../atom/user';
import Button from './Button';

export default function Navbar() {
  const user = useRecoilValue(userAtom);

  const buttonProps = useMemo(
    () =>
      user.isLoggedIn
        ? { value: '관리자 페이지', to: '/admin' }
        : { value: '로그인', to: '/login' },
    [user]
  );

  return (
    <Provider>
      <ItemProvider>
        <Button {...buttonProps}></Button>
      </ItemProvider>
    </Provider>
  );
}

const Provider = styled.div`
  position: sticky;
  padding: 1.25rem 2.25rem;
  background: #ffb341;
`;

const ItemProvider = styled.div`
  display: flex;
  justify-content: flex-end;
`;
