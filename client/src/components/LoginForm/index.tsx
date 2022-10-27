import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

export default function LoginForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => setId(e.currentTarget.value),
    [setId]
  );
  const onChangePassword: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => setPassword(e.currentTarget.value), [setPassword]);

  const onSubmitForm: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.preventDefault();
    },
    []
  );

  return (
    <Provider>
      <Title>로그인</Title>
      <Input placeholder='아이디' value={id} onChange={onChangeId} />
      <Input
        type='password'
        placeholder='비밀번호'
        value={password}
        onChange={onChangePassword}
      />
      <Button type='submit' onChange={onSubmitForm}>
        로그인
      </Button>
    </Provider>
  );
}

const Title = styled.h1`
  text-align: center;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background: #12b886;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  color: white;
  border-radius: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  color: black;
  font-size: 1rem;
  border: none;
  padding: 0.5rem 0 0.5rem 0.3rem;
  border-radius: 5px;
`;

const Provider = styled.form`
  display: flex;
  width: 15rem;
  padding: 3rem;
  flex-direction: column;
  background: #f5f5f5;
`;
