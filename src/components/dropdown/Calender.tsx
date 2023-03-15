import styled, { css } from 'styled-components';
import { Arrow } from '../../assets/svg/Arrow';
import { DateValueType, useCalender } from '../../hooks/useCalender';
import { Text } from '../text';

interface PropsType {
  initialValue: DateValueType | undefined;
  closeDropdown: () => void;
  onOkButtonClick: (value: DateValueType) => void;
}

export const CalenderDropdown = ({
  initialValue,
  closeDropdown,
  onOkButtonClick,
}: PropsType) => {
  const {
    date,
    onSaveClickedDay,
    isCurrentMonth,
    startDay,
    dayArray,
    weekArray,
    plusDate,
    minusDate,
  } = useCalender({ initialValue });

  const isCurrentDay = (day: number) => isCurrentMonth && date.day === day;

  const setChangeAtInput = () => {
    onOkButtonClick(date);
    closeDropdown();
  };

  return (
    <>
      <_TitleWrapper color="gray700">
        <_DateSelectWrapper>
          <Arrow direction="right" onClick={minusDate('month')} />
          {date.month + 1}월
          <Arrow direction="left" onClick={plusDate('month')} />
        </_DateSelectWrapper>
        <_DateSelectWrapper>
          <Arrow direction="right" onClick={minusDate('year')} />
          {date.year}년
          <Arrow direction="left" onClick={plusDate('year')} />
        </_DateSelectWrapper>
      </_TitleWrapper>
      <_DateWrapper>
        {weekArray.map((day) => (
          <_WeekText>{day}</_WeekText>
        ))}
        {Array(startDay)
          .fill(0)
          .map(() => (
            <_WeekText />
          ))}
        {Array(dayArray)
          .fill(0)
          .map((_, idx) => (
            <_DateText
              isClickedDay={isCurrentDay(idx + 1)}
              onClick={() => onSaveClickedDay(idx + 1)}
            >
              {idx + 1}
            </_DateText>
          ))}
      </_DateWrapper>
      <_ButtonWrapper>
        <_Button color="primary600" size="heading3" onClick={setChangeAtInput}>
          확인
        </_Button>
        <_Button color="primary600" size="heading3" onClick={closeDropdown}>
          취소
        </_Button>
      </_ButtonWrapper>
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

const _DateSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const _DateWrapper = styled.div`
  display: flex;
  height: 336px;
  flex-wrap: wrap;
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

const _ButtonWrapper = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  flex-direction: row-reverse;
  padding: 0 12px;
`;

const _Button = styled(Text)`
  cursor: pointer;
  border: 0;
  padding: 10px 12px;
`;
