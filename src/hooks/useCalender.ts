import { useState } from 'react';

const returnLeapYear = (year: number) => (year % 4 === 0 ? 1 : 0);

const weekArray = ['일', '월', '화', '수', '목', '금', '토'];
const dayArray = (year: number) => [
  31,
  28 + returnLeapYear(year),
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];
const domsDayArray = (year: number) => {
  const leapYear = returnLeapYear(year);
  return [3 + leapYear, 7 + leapYear, 7, 4, 9, 6, 11, 8, 5, 10, 7, 12];
};

const returnStartDay = (year: number, month: number) => {
  const anker = year >= 2000 ? 2 : 3;
  const domsDay = domsDayArray(year);
  const order = year % 100;
  const order2 = order % 12;
  const order3 = Math.floor(order / 12);
  const order4 = Math.floor(order2 / 4);
  const backCnt = (domsDay[month] - 1) % 7;
  const weekAnker = (order2 + order3 + order4 + anker) % 7;
  return (7 - backCnt + weekAnker) % 7;
};

export const getInitDate = (includeDay?: boolean) => {
  const getDate = new Date();
  const todayDate: DateValueType = {
    year: getDate.getFullYear(),
    month: getDate.getMonth(),
  };
  if (!includeDay) return todayDate;
  todayDate.day = getDate.getDate();
  return todayDate;
};

export interface DateValueType {
  year: number;
  month: number;
  day?: number;
}

const dateArrayChange = (temp: DateValueType) => {
  const { month } = temp;
  if (month <= -1) {
    temp.month = 11;
    temp.year--;
  } else if (month >= 12) {
    temp.month = 0;
    temp.year++;
  }
  const { year } = temp;
  if (year < 1900 || year > 2099) return;
  return temp;
};

interface PropsType {
  initialValue?: DateValueType;
}
export const useCalender = ({ initialValue = getInitDate() }: PropsType) => {
  const [date, setDate] = useState<DateValueType>(initialValue);
  const [checkDate, setCheck] = useState<DateValueType>(initialValue);

  const plusDate = (type: keyof typeof date) => () => {
    const temp = { ...date };
    temp[type]++;
    setDate(dateArrayChange(temp));
  };

  const minusDate = (type: keyof typeof date) => () => {
    const temp = { ...date };
    temp[type]--;
    setDate(dateArrayChange(temp));
  };

  const onSaveClickedDay = (day: number) => {
    setDate({ ...date, day: day });
    setCheck({ ...date });
  };

  const isCurrentDay = (day: number) =>
    checkDate.year === date.year &&
    checkDate.month === date.month &&
    date.day === day;

  const { year, month } = date;
  return {
    date,
    onSaveClickedDay,
    isCurrentDay,
    startDay: returnStartDay(year, month),
    dayArray: dayArray(year)[month],
    weekArray,
    plusDate,
    minusDate,
  };
};
