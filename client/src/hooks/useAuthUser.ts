import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { authSelector } from '../atom/auth';
import modalAtom from '../atom/modal';
import { userSelector } from '../atom/user';
import Client from '../lib/client';

interface LoginUserInput {
  email?: string;
  username?: string;
  password: string;
}

interface RegisterInput {
  email: string;
  username: string;
  password: string;
}

export default function useAuthUser() {
  const setAuthToken = useSetRecoilState(authSelector);
  const setModal = useSetRecoilState(modalAtom);
  const setUser = useSetRecoilState(userSelector);

  const loginUser = useCallback(
    async ({ email, username, password }: LoginUserInput) => {
      try {
        if (!email && !username) {
          toast.error('아이디나 이메일을 제대로 입력해주세요');
        }

        const response = await Client.post('/samshisaeki/auth/login', {
          email,
          username,
          password,
        });

        if (response.status !== 201) {
          toast.error(response.data.msg);
          return;
        }

        setAuthToken(response.data.token);

        toast.info('성공적으로 로그인했습니다');

        setModal({
          isOpened: false,
          type: 'login',
        });

        const user = response.data.user as { name: string };

        setUser({
          username: user.name,
          nickname: user.name,
        });
      } catch (err) {
        toast.error('로그인 중 오류가 발생했습니다');
      }
    },
    [setAuthToken, setModal, setUser]
  );

  const registerUser = useCallback(
    async ({ email, username, password }: RegisterInput) => {
      try {
        const response = await Client.post('/samshisaeki/auth/register', {
          email,
          username,
          password,
        });

        if (response.status !== 201) {
          toast.error(response.data.msg);
          return;
        }

        setAuthToken(response.data.token);

        toast.info('성공적으로 회원가입했습니다');

        setModal({
          isOpened: false,
          type: 'register',
        });

        const user = response.data.user as { name: string };

        setUser({
          username: user.name,
          nickname: user.name,
        });
      } catch (err) {
        toast.error('회원가입 중 오류가 발생했습니다');
      }
    },
    [setAuthToken, setModal, setUser]
  );

  return { loginUser, registerUser };
}
