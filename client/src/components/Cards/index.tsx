import React, { useEffect, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { dateSelector } from '../../atom/date';
import { mealSelector } from '../../atom/meal';
import Card from './Card';

export default function Cards() {
  const meals = useRecoilValue(mealSelector);
  const date = useRecoilValue(dateSelector);
  const dateFormatted = useMemo(() => {
    const d = date.split('-');
    return `${d[0]}년 ${d[1]}월 ${d[2]}일`;
  }, [date]);
  const menus = useMemo(
    () => meals.filter((m) => m.date.toISOString().split('T')[0] === date),
    [date, meals]
  );
  const meal = useMemo(
    () => ({
      morning: menus.find((m) => m.time === '아침'),
      afternoon: menus.find((m) => m.time === '점심'),
      dinner: menus.find((m) => m.time === '저녁'),
    }),
    [menus]
  );

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <Card
        date={`${dateFormatted} (아침)`}
        menu={meal['morning']?.menu}
      ></Card>
      <Card
        date={`${dateFormatted} (점심)`}
        menu={meal['afternoon']?.menu}
      ></Card>
      <Card date={`${dateFormatted} (저녁)`} menu={meal['dinner']?.menu}></Card>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
