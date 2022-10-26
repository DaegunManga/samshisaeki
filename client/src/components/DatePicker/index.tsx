import React, { useMemo } from 'react';
import { default as RDatePicker } from 'react-datepicker';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import dateAtom, { dateSelector } from '../../atom/date';
import PickerInput from './PickerInput';

export default function DatePicker() {
  const formattedDate = useRecoilValue(dateSelector);
  const setDate = useSetRecoilState(dateAtom);
  const date = useMemo(() => new Date(formattedDate), [formattedDate]);
  const lastWeekDate = useMemo(() => {
    const now = new Date();
    return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  }, []);
  const nextWeekDate = useMemo(() => {
    const now = new Date();
    return new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  }, []);

  return (
    <RDatePicker
      selected={date}
      value={formattedDate}
      minDate={lastWeekDate}
      maxDate={nextWeekDate}
      onChange={(d) => setDate(d ? d : new Date())}
      customInput={React.createElement(PickerInput)}
    />
  );
}
