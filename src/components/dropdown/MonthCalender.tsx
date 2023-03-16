import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Okay } from '../../assets/svg/Okay';
import { DateValueType, getInitDate } from '../../hooks/useCalender';
import { Text } from '../text';

interface PropsType {
  value: DateValueType;
  onSubmitAtInput: (value: DateValueType) => void;
}

export const MonthCalender = ({ value, onSubmitAtInput }: PropsType) => {
  const [date, setDate] = useState<DateValueType>(value || getInitDate(true));
  const [selectDate, setSelect] = useState<'year' | 'month'>('month');
  const ref = useRef<HTMLDivElement | null>(null);

  const onChangeYearOrMonth = (selectValue: number) => {
    const changeValue = { ...date, [selectDate]: selectValue };
    setDate(changeValue);
    onSubmitAtInput(changeValue);
  };

  const selectDateToYear = () => setSelect('year');
  const selectDateToMonth = () => setSelect('month');

  const isYear = selectDate === 'year';

  const isSelectedItem = (idx: number) => date[selectDate] === idx;

  const itemListCount = isYear ? 199 : 12;
  const yearStart1900 = isYear ? 1900 : 0;
  const monthPlusOne = isYear ? 0 : 1;

  useEffect(() => {
    const saveItemScroll =
      (date[isYear ? 'year' : 'month'] - yearStart1900) * 48;
    ref.current.scrollTo(0, saveItemScroll);
  }, [selectDate]);

  return (
    <>
      <_MonthTitleWrapper>
        <_Title isYear={isYear} onClick={selectDateToMonth}>
          {date.month + 1}월
        </_Title>
        <_Title isYear={!isYear} onClick={selectDateToYear}>
          {date.year}년
        </_Title>
      </_MonthTitleWrapper>
      <_YearListWrapper ref={ref}>
        {Array(itemListCount)
          .fill(0)
          .map((_, idx) => {
            const yearcnt = yearStart1900 + idx;
            return (
              <_YearSelectItem
                isSelectedItem={isSelectedItem(yearcnt)}
                onClick={() => onChangeYearOrMonth(yearcnt)}
              >
                <_ListBox>
                  <Okay />
                </_ListBox>
                {yearcnt + monthPlusOne}
              </_YearSelectItem>
            );
          })}
      </_YearListWrapper>
    </>
  );
};

const _TitleWrapper = styled(Text)`
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
`;

const _MonthTitleWrapper = styled(_TitleWrapper)`
  padding: 0 52px;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary400};
`;

const _YearListWrapper = styled.div`
  overflow-x: auto;
  height: 336px;
  margin-top: 8px;
  ::-webkit-scrollbar {
    width: 15.5px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.primary500};
    background-clip: padding-box;
    border: 3.5px solid transparent;
    min-height: 50px;
    border-radius: 8px;
  }
`;

const _Title = styled(Text)<{ isYear: boolean }>`
  cursor: pointer;
  color: ${({ theme, isYear }) => theme.color[isYear ? 'gray300' : 'gray700']};
`;

const _ListBox = styled.div`
  width: 24px;
  height: 24px;
  visibility: hidden;
`;

const _YearSelectItem = styled.div<{ isSelectedItem: boolean }>`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  ${({ theme, isSelectedItem }) =>
    isSelectedItem &&
    css`
      background-color: ${theme.color.primary100};
      ${_ListBox} {
        visibility: visible;
      }
    `};
  :hover {
    background-color: ${({ theme }) => theme.color.primary100};
  }
`;
