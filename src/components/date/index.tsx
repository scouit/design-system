import OutsideClickHandler from 'react-outside-click-handler';
import styled, { css } from 'styled-components';
import { Calender } from '../../assets/svg/Calender';
import { DateValueType } from '../../hooks/useCalender';
import { useInversion } from '../../hooks/useInversion';
import { DayCalender } from './DayCalender';
import { MonthCalender } from './MonthCalender';
import { Text } from '../text';

interface PropsType {
  isDayInclude?: boolean;
  label?: string;
  value: DateValueType | undefined;
  placeholder?: string;
  onSubmitAtInput: (value: DateValueType) => void;
}

export const DateInput = ({
  isDayInclude = true,
  label = '날짜',
  onSubmitAtInput,
  value,
  placeholder = '날짜를 입력해 주세요',
}: PropsType) => {
  const {
    state: dropdown,
    correctState: openDropdown,
    incorrectState: closeDropdown,
  } = useInversion(true);

  const CalenderDateValue = () => {
    if (value) {
      const { year, month, day } = value;
      const date = [year, month];
      if (isDayInclude) date.push(day);
      return date.join('-');
    }
  };

  return (
    <OutsideClickHandler display="inline-block" onOutsideClick={closeDropdown}>
      <DropdownRelative>
        <_Label size="title2" color="gray900">
          {label}
        </_Label>
        <_Wrapper onClick={openDropdown}>
          <_TextValue
            value={CalenderDateValue()}
            placeholder={placeholder}
            disabled
          />
          <_SvgWrapper>
            <Calender />
          </_SvgWrapper>
        </_Wrapper>
        {dropdown && (
          <_CalenderWrapper>
            {isDayInclude ? (
              <DayCalender
                initialValue={value}
                closeDropdown={closeDropdown}
                onSubmitAtInput={onSubmitAtInput}
              />
            ) : (
              <MonthCalender value={value} onSubmitAtInput={onSubmitAtInput} />
            )}
          </_CalenderWrapper>
        )}
      </DropdownRelative>
    </OutsideClickHandler>
  );
};

const DropdownRelative = styled.div`
  position: relative;
`;

const _Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.gray500};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 345px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px 0 12px;
`;

const _TextValue = styled.input`
  cursor: pointer;
  background-color: transparent;
  ${({ theme }) =>
    css`
      ${theme.font.body1};
      ::placeholder {
        color: ${theme.color.gray300};
      }
    `};
`;

const _SvgWrapper = styled.div`
  padding: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  :hover {
    background-color: ${({ theme }) => theme.color.gray100};
  }
  :active {
    background-color: ${({ theme }) => theme.color.gray200};
  }
`;

const _CalenderWrapper = styled.div`
  width: 100%;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.primary25};
  position: absolute;
  top: 91px;
  left: 0;
`;

const _Label = styled(Text)`
  position: absolute;
  top: -27px;
`;
