import { useState } from 'react';

const returnLeapYear = (year: number) => (year % 4 === 0 ? 1 : 0);

const weekArray = ['일', '월', '화', '수', '목', '금', '토'];
const returnDayArray = (year: number) => [
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
const returnDomsDayArray = (year: number) => {
  const leapYear = returnLeapYear(year);
  return [3 + leapYear, 7 + leapYear, 7, 4, 9, 6, 11, 8, 5, 10, 7, 12];
};

const returnStartDay = (year: number, month: number) => {
  const anker = year >= 2000 ? 2 : 3;
  const domsDay = returnDomsDayArray(year);
  const getYearIndex01 = year % 100;
  const Index01Remain = getYearIndex01 % 12;
  const Index01Result = Math.floor(getYearIndex01 / 12);
  const divideRemain = Math.floor(Index01Remain / 4);
  const backCount = (domsDay[month] - 1) % 7;
  const weekAnker = (Index01Remain + Index01Result + divideRemain + anker) % 7;
  return (7 - backCount + weekAnker) % 7;
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

const onDateChange = (temp: DateValueType) => {
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

export interface DateValueType {
  year: number;
  month: number;
  day?: number;
}

type DateKeyType = keyof DateValueType;

interface PropsType {
  initialValue?: DateValueType;
}

export const useCalender = ({ initialValue = getInitDate() }: PropsType) => {
  const [date, setDate] = useState<DateValueType>(initialValue);
  const [checkDate, setCheck] = useState<DateValueType>(initialValue);

  const plusMinus = (type: DateKeyType, act: 'plus' | 'minus') => {
    const temp = { ...date };
    temp[type] += act === 'plus' ? 1 : -1;
    setDate(onDateChange(temp));
  };

  const plusDate = (type: DateKeyType) => () => plusMinus(type, 'plus');

  const minusDate = (type: DateKeyType) => () => plusMinus(type, 'minus');

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
    dayArray: returnDayArray(year)[month],
    weekArray,
    plusDate,
    minusDate,
  };
};
