import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import modalAtom from '../../atom/modal';
import useOnClickOutside from '../../hooks/useOnClickOutside';

export default function LoginForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [idError, setIdError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const setModal = useSetRecoilState(modalAtom);

  const formRef = useRef<HTMLFormElement>(null);

  useOnClickOutside(formRef, () => {
    setModal({
      isOpened: false,
      type: 'login',
    });
  });

  const onChangeId: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setIdError(false);
      setId(e.currentTarget.value);
    },
    [setId]
  );
  const onChangePassword: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        setPwError(false);
        setPassword(e.currentTarget.value);
      },
      [setPassword]
    );

  const onSubmitForm: React.FormEventHandler = useCallback(
    (e) => {
      e.preventDefault();

      if (id === '') {
        setIdError(true);
        toast.error('아이디를 입력해주세요');
        return;
      }
      if (password === '') {
        setPwError(true);
        toast.error('비밀번호를 입력해주세요');
        return;
      }

      toast.error('로그인에 실패했습니다');
    },
    [id, password, setIdError, setPwError]
  );

  const onClickToRegister: React.MouseEventHandler = (e) => {
    setModal({
      isOpened: false,
      type: 'login',
    });
  };

  return (
    <Provider onSubmit={onSubmitForm} ref={formRef}>
      <Input
        placeholder='아이디'
        value={id}
        onChange={onChangeId}
        isError={idError}
      />
      <Input
        type='password'
        placeholder='비밀번호'
        value={password}
        onChange={onChangePassword}
        isError={pwError}
      />
      <Button type='submit'>로그인</Button>
      <span>
        또는{' '}
        <LinkToRegister to='/register' onClick={onClickToRegister}>
          회원가입
        </LinkToRegister>
      </span>
    </Provider>
  );
}

const LinkToRegister = styled(Link)`
  color: #12b886;
  text-decoration: none;
  &:hover {
    color: rgba(18, 184, 134, 0.8);
  }
`;

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

const Input = styled.input<{ isError: boolean }>`
  margin-bottom: 1rem;
  color: black;
  font-size: 1rem;
  border: 1px solid ${(props) => (props.isError ? '#fa5757' : '#f0f0f0')};
  padding: 0.5rem 0 0.5rem 0.75rem;
  outline: none;
  &:focus {
    border: 1px solid #c2c2c2;
  }
`;

const Provider = styled.form`
  display: flex;
  width: 15rem;
  padding: 3rem;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  & > span {
    margin-top: 1rem;
    text-align: center;
  }
`;
