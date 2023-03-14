import styled from 'styled-components';
import { Arrow } from '../../assets/svg/Arrow';
import { useCalender } from '../../hooks/useCalender';
import { Text } from '../text';

interface PropsType {
  margin_left?: string;
}

export const DateInput = ({ margin_left }: PropsType) => {
  const {
    year,
    month,
    startDay,
    dayArray,
    weekArray,
    changeDate,
    plusDate,
    minusDate,
  } = useCalender();

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
            <_DateText>{idx + 1}</_DateText>
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

const _Wrapper = styled.div<PropsType>`
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

const _DateText = styled(_WeekText)`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
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
