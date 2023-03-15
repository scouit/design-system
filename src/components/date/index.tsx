import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';
import { Arrow } from '../../assets/svg/Arrow';
import { Calender } from '../../assets/svg/Calender';
import { DateValueType } from '../../hooks/useCalender';
import { useInversion } from '../../hooks/useInversion';
import { DateDropdown } from '../dropdown/Date';
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
    invertState: switchDropdown,
  } = useInversion();

  const stringDate =
    value && [value.year, value.month + 1, value.day].join('-');
  return (
    <OutsideClickHandler display="inline-block" onOutsideClick={closeDropdown}>
      <_Wrapper>
        <_TextValue color={stringDate ? 'gray900' : 'gray300'}>
          {stringDate || placeholder}
        </_TextValue>
        <_SvgWrapper>
          <Calender onClick={switchDropdown} />
        </_SvgWrapper>

        {dropdown && <DateDropdown onOkButtonClick={onOkButtonClick} />}
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
