import { useState } from 'react';
import styled, { css } from 'styled-components';
import { DateValueType, useCalender } from '../../hooks/useCalender';
import { Text } from '../text';

interface PropsType {
  value: DateValueType;
  onOkButtonClick: (value: DateValueType) => void;
}

export const YearMonthDropdown = ({ value, onOkButtonClick }: PropsType) => {
  const { date } = useCalender({});

  const [selectDate, setSelect] = useState<'year' | 'month'>('month');
  const setDateNoIncludeDay = (selectValue: number) => {
    onOkButtonClick({ ...value, [selectDate]: selectValue });
  };

  const selectDateToYear = () => setSelect('year');
  const selectDateToMonth = () => setSelect('month');

  const isItemSelect = (idx: number) => date[selectDate] === idx;
  return (
    <>
      <_MonthTitleWrapper>
        <Text onClick={selectDateToMonth}>{date.month}월</Text>
        <Text onClick={selectDateToYear}>{date.year}년</Text>
      </_MonthTitleWrapper>
      <_YearListWrapper>
        {Array(1000)
          .fill(0)
          .map((_, idx) => (
            <_YearSelectItem
              isItemSelect={isItemSelect(idx)}
              onClick={() => setDateNoIncludeDay(idx)}
            >
              <_ListBox />
              {idx}
            </_YearSelectItem>
          ))}
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
  border-bottom: 1px solid ${({ theme }) => theme.color.gray300};
`;

const _DateSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const _DateWrapper = styled.div`
  display: flex;
  height: 336px;
  flex-wrap: wrap;
  padding: 0 4px;
`;

const _WeekText = styled(Text)`
  width: 40px;
  height: 40px;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _DateText = styled(_WeekText)<{ isClickedDay: boolean }>`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  ${({ theme, isClickedDay }) =>
    isClickedDay &&
    css`
      background-color: ${theme.color.primary600};
      color: ${theme.color.gray25};
    `};
  :hover {
    background-color: ${({ theme }) => theme.color.primary600};
    color: ${({ theme }) => theme.color.gray25};
  }
`;

const _YearListWrapper = styled.div`
  overflow-x: auto;
  height: 336px;
`;

const _Title = styled(Text)<{ isYear: boolean }>``;

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
  background-color: ${({ theme, isItemSelect }) =>
    isItemSelect &&
    css`
      background-color: ${theme.color.gray300};
      ${_ListBox} {
        visibility: visible;
      }
    `};
  :hover {
    background-color: ${({ theme }) => theme.color.gray300};
  }
`;
