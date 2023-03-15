import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Okay } from '../../assets/svg/Okay';
import {
  DateValueType,
  getInitDate,
  useCalender,
} from '../../hooks/useCalender';
import { Text } from '../text';

interface PropsType {
  value: DateValueType;
  onOkButtonClick: (value: DateValueType) => void;
}

export const YearMonthDropdown = ({ value, onOkButtonClick }: PropsType) => {
  const [date, setDate] = useState<DateValueType>(value || getInitDate());

  const [selectDate, setSelect] = useState<'year' | 'month'>('month');

  const setDateNoIncludeDay = (selectValue: number) => {
    const changeValue = { ...date, [selectDate]: selectValue };
    setDate(changeValue);
    onOkButtonClick(changeValue);
  };

  const selectDateToYear = () => setSelect('year');
  const selectDateToMonth = () => setSelect('month');

  const isYear = selectDate === 'year';

  const isItemSelect = (idx: number) =>
    date[selectDate] === idx + (isYear ? 1 : 0);

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
      <_YearListWrapper>
        {Array(isYear ? 199 : 12)
          .fill(0)
          .map((_, idx) => {
            const yearcnt = (isYear ? 1900 : 0) + idx;
            return (
              <_YearSelectItem
                isItemSelect={isItemSelect(yearcnt)}
                onClick={() => setDateNoIncludeDay(yearcnt)}
              >
                <_ListBox>
                  <Okay />
                </_ListBox>
                {yearcnt + 1}
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

const _YearSelectItem = styled.div<{ isItemSelect: boolean }>`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  ${({ theme, isItemSelect }) =>
    isItemSelect &&
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
