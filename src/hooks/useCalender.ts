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

const returnStartDay = (year: number, month: number) => {
  const leapYear = returnLeapYear(year);
  const anker = year >= 2000 ? 2 : 3;
  const domsDay = [3 + leapYear, 7 + leapYear, 7, 4, 9, 6, 11, 8, 5, 10, 7, 12];
  const order = year % 100;
  const order2 = order % 12;
  const order3 = Math.floor(order / 12);
  const order4 = Math.floor(order2 / 4);
  const backCnt = (domsDay[month] - 1) % 7;
  return (7 - backCnt + ((order2 + order3 + order4 + anker) % 7)) % 7;
};

const getDate = new Date();

const initalValue = {
  year: getDate.getFullYear(),
  month: getDate.getMonth(),
  day: getDate.getDate(),
};

export const useCalender = () => {
  const [date, setDate] = useState(initalValue);
  const { year, month } = date;

  const dateArrayChange = (temp: typeof initalValue) => {
    if (temp.year < 1900 || temp.year > 2099) return;
    if (temp.month <= -1) {
      temp.month = 11;
      temp.year--;
    } else if (temp.month >= 12) {
      temp.month = 0;
      temp.year++;
    }
    setDate(temp);
  };

  const changeDate = (type: keyof typeof date, value: number) => () => {
    const temp = { ...date };
    temp[type] = value;
    dateArrayChange(temp);
  };

  const plusDate = (type: keyof typeof date) => () => {
    const temp = { ...date };
    temp[type]++;
    dateArrayChange(temp);
  };

  const minusDate = (type: keyof typeof date) => () => {
    const temp = { ...date };
    temp[type]--;
    dateArrayChange(temp);
  };

  return {
    year,
    month,
    startDay: returnStartDay(year, month),
    dayArray: dayArray(year)[month],
    weekArray,
    changeDate,
    plusDate,
    minusDate,
  };
};
