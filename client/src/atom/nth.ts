import { selector } from 'recoil';
import Client from '../lib/client';

export const nthSelector = selector({
  key: 'nth-sel',
  get: async () => {
    try {
      const response = await Client.post('/samshiseaki/nth');

      const { msg }: { msg: string } = JSON.parse(response.data);

      return msg || '지금은 급식시간이 아닙니다';
    } catch (err) {
      console.error(err);
    }
  },
});
