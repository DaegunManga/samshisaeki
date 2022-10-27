import React, { useCallback, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import modalAtom from '../../atom/modal';
import useOnClickOutside from '../../hooks/useOnClickOutside';

export default function LoginForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const setModal = useSetRecoilState(modalAtom);

  const formRef = useRef<HTMLFormElement>(null);

  useOnClickOutside(formRef, () => {
    setModal({
      isOpened: false,
      type: 'login',
    });
  });

  const onChangeId: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => setId(e.currentTarget.value),
    [setId]
  );
  const onChangePassword: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => setPassword(e.currentTarget.value), [setPassword]);

  const onSubmitForm: React.FormEventHandler = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <Provider onSubmit={onSubmitForm} ref={formRef}>
      <Input placeholder='아이디' value={id} onChange={onChangeId} />
      <Input
        type='password'
        placeholder='비밀번호'
        value={password}
        onChange={onChangePassword}
      />
      <Button type='submit'>로그인</Button>
    </Provider>
  );
}

const Button = styled.button`
  background: #12b886;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  color: white;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: rgba(18, 184, 134, 0.8);
  }
`;

const Input = styled.input`
  margin-bottom: 1rem;
  color: black;
  font-size: 1rem;
  border: 1px solid #f0f0f0;
  padding: 0.5rem 0 0.5rem 0.75rem;
  outline: none;
`;

const Provider = styled.form`
  display: flex;
  width: 15rem;
  padding: 3rem;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
`;
