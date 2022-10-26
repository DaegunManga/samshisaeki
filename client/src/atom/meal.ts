import { atom, selector } from 'recoil';
import Client from '../lib/client';

type WeekType = '월' | '화' | '수' | '목' | '금' | '토' | '일';
type TimeType = '아침' | '점심' | '저녁';

interface Meals {
  date: Date;
  week: WeekType;
  time: TimeType;
  menu: string[];
}

const mealAtom = atom<Meals[]>({
  key: 'meals',
  default: [],
});

export const mealSelector = selector({
  key: 'meals-sel',
  get: ({ get }) => get(mealAtom),
  set: async ({ set }) => {
    const results = [];

    try {
      const response = await Client.get('/meal');

      const { meals } = response.data;

      for (const meal in meals) {
        const [date, time] = ((meal as any).date as string).split(' ') as [
          string,
          TimeType
        ];

        const meal: Meals = {
          date,
          week,
          time,
          menu,
        };
      }
    } catch (err) {
      console.error(err);
    }
  },
});

export default mealAtom;
