import styled from 'styled-components';
import { Arrow } from '../../assets/svg/Arrow';
import { DateValueType, useCalender } from '../../hooks/useCalender';
import { Text } from '../text';

interface PropsType {
  value: DateValueType;
  onDateClick: (value: DateValueType) => void;
}

export const DateInput = ({ onDateClick, value }: PropsType) => {
  const {
    year,
    month,
    startDay,
    dayArray,
    weekArray,
    plusDate,
    minusDate,
  } = useCalender();

  const setDate = (value: number) => onDateClick({ year, month, day: value });

  const isClickedDay = (day: number) => {
    if (value.year !== year) return false;
    if (value.month !== month) return false;
    if (value.day !== day) return false;
    return true;
  };

  return (
    <_Wrapper>
      <_TitleWrapper color="gray700">
        <_DateSelectWrapper>
          <Arrow direction="right" onClick={minusDate('month')} />
          {month + 1}월
          <Arrow direction="left" onClick={plusDate('month')} />
        </_DateSelectWrapper>
        <_DateSelectWrapper>
          <Arrow direction="right" onClick={minusDate('year')} />
          {year}년
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
              isClickedDay={isClickedDay(idx + 1)}
              onClick={() => setDate(idx + 1)}
            >
              {idx + 1}
            </_DateText>
          ))}
      </_DateWrapper>
      <_ButtonWrapper>
        <_Button color="primary500" size="heading3">
          Ok
        </_Button>
        <_Button color="primary500" size="heading3">
          Cancel
        </_Button>
      </_ButtonWrapper>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 345px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.primary50};
`;

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
  background-color: ${({ theme, isClickedDay }) =>
    isClickedDay && theme.color.primary400};
  :hover {
    background-color: ${({ theme }) => theme.color.primary400};
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
