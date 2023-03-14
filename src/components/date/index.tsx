import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';
import { Arrow } from '../../assets/svg/Arrow';
import { DateValueType, useCalender } from '../../hooks/useCalender';
import { useInversion } from '../../hooks/useInversion';
import { DateDropdown } from '../dropdown/Date';
import { Text } from '../text';

interface PropsType {
  value: DateValueType;
  onDateClick: (value: DateValueType) => void;
}

export const DateInput = ({ onDateClick, value }: PropsType) => {
  const {
    state: dropdown,
    correctState: openDropdown,
    incorrectState: closeDropdown,
    invertState: switchDropdown,
  } = useInversion();
  return (
    <OutsideClickHandler display="inline-block" onOutsideClick={closeDropdown}>
      <_Wrapper>
        <button onClick={switchDropdown}>앙드롭다운</button>
        {dropdown && <DateDropdown onDateClick={onDateClick} value={value} />}
      </_Wrapper>
    </OutsideClickHandler>
  );
};

const _Wrapper = styled.div``;
