import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import styled, { css } from 'styled-components';
import { Arrow } from '../../assets/svg/Arrow';
import { Calender } from '../../assets/svg/Calender';
import { DateValueType, useCalender } from '../../hooks/useCalender';
import { useInversion } from '../../hooks/useInversion';
import { CalenderDropdown } from '../dropdown/Calender';
import { YearMonthDropdown } from '../dropdown/yearMonth';
import { Text } from '../text';

interface PropsType {
  type: 'includeDay' | 'notIncludeDay';
  value: DateValueType | null;
  placeholder: string;
  onOkButtonClick: (value: DateValueType) => void;
}

export const DateInput = ({
  type,
  onOkButtonClick,
  value,
  placeholder,
}: PropsType) => {
  const {
    state: dropdown,
    correctState: openDropdown,
    incorrectState: closeDropdown,
  } = useInversion(true);

  const valueDate = value && [value.year, value.month + 1, value.day].join('-');

  const isDayCalender = type === 'includeDay';

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
            {isDayCalender ? (
              <CalenderDropdown
                initialValue={value}
                closeDropdown={closeDropdown}
                onOkButtonClick={onOkButtonClick}
              />
            ) : (
              <YearMonthDropdown
                value={value}
                onOkButtonClick={onOkButtonClick}
              />
            )}
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
  width: 100%;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.primary50};
  position: absolute;
  top: 91px;
  left: 0;
`;
