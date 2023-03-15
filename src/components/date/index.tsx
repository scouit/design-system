import OutsideClickHandler from 'react-outside-click-handler';
import styled, { css } from 'styled-components';
import { Arrow } from '../../assets/svg/Arrow';
import { Calender } from '../../assets/svg/Calender';
import { DateValueType, useCalender } from '../../hooks/useCalender';
import { useInversion } from '../../hooks/useInversion';
import { Text } from '../text';

interface PropsType {
  value: DateValueType | null;
  placeholder: string;
  onOkButtonClick: (value: DateValueType) => void;
}

export const DateInput = ({
  onOkButtonClick,
  value,
  placeholder,
}: PropsType) => {
  const {
    state: dropdown,
    correctState: openDropdown,
    incorrectState: closeDropdown,
  } = useInversion();

  const valueDate = value && [value.year, value.month + 1, value.day].join('-');

  const {
    date,
    onSaveClickedDay,
    isCurrentMonth,
    startDay,
    dayArray,
    weekArray,
    plusDate,
    minusDate,
  } = useCalender();

  const setDate = () => isCurrentMonth && onOkButtonClick(date);

  const isCurrentDay = (day: number) => isCurrentMonth && date.day === day;

  return (
    <OutsideClickHandler display="inline-block" onOutsideClick={closeDropdown}>
      <_Wrapper>
        <_TextValue
          onClick={openDropdown}
          color={valueDate ? 'gray900' : 'gray300'}
        >
          {valueDate || placeholder}
        </_TextValue>
        <_SvgWrapper onClick={openDropdown}>
          <Calender />
        </_SvgWrapper>

        {dropdown && (
          <_CalenderWrapper>
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
              <_Button color="primary600" size="heading3" onClick={setDate}>
                확인
              </_Button>
              <_Button
                color="primary600"
                size="heading3"
                onClick={closeDropdown}
              >
                취소
              </_Button>
            </_ButtonWrapper>
          </_CalenderWrapper>
        )}
      </_Wrapper>
    </OutsideClickHandler>
  );
};

const _Wrapper = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.gray500};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 345px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
`;

const _TextValue = styled(Text)`
  padding: 0 12px;
`;

const _SvgWrapper = styled.div`
  padding: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  :hover {
    background-color: ${({ theme }) => theme.color.gray200};
  }
`;

const _CalenderWrapper = styled.div`
  width: 345px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.primary50};
  position: absolute;
  top: 91px;
  left: 0;
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
