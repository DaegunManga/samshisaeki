import { atom, selector, selectorFamily } from 'recoil';
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

export const mealFilter = selectorFamily({
  key: 'meals-sel-filter',
  get:
    (date: string) =>
    ({ get }) => {
      const meals = get(mealAtom);
      const selectedMeal = meals.filter((m) => m.date === new Date(date));

      return selectedMeal;
    },
});

export const mealSelector = selector({
  key: 'meals-sel',
  get: async ({ get }) => {
    const results = [];

    try {
      const response = await Client.get('/samshiseaki/meal');

      const { meals } = JSON.parse(response.data);

      for (const meal of meals) {
        const jmeal = meal;

        const [d, time] = (jmeal.date as string).split(' ') as [
          string,
          TimeType
        ];

        const menu = jmeal.menu as string[];
        const dates = d.split('.');
        const date = new Date(
          new Date(`2023.${dates[0]}.${dates[1]}`).getTime() +
            1000 * 60 * 60 * 24
        );
        const week = dates[2] as WeekType;

        const m: Meals = {
          date,
          week,
          time,
          menu,
        };

        results.push(m);
      }
    } catch (err) {
      console.error(err);
    }

    return results;
  },
});

export default mealAtom;
