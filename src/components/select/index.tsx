import { useState } from 'react';
import styled from 'styled-components';
import { Arrow } from '../../assets/svg/Arrow';
import { Text } from '../text';

interface PropsType {
  placeholder: string;
  value?: string;
  list: string[];
}

export const Select = ({ value, placeholder, list }: PropsType) => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  return (
    <_Wrapper>
      <_SelectWrapper onClick={() => setDropDown(!dropDown)}>
        <Text size="heading3" color="gray700">
          {value || placeholder}
        </Text>
        <Arrow dropDown={dropDown} />
      </_SelectWrapper>

      <_OptionWrapper>
        {list.map((optionValue) => (
          <_Option>{optionValue}</_Option>
        ))}
      </_OptionWrapper>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  position: relative;
  height: 38px;
  width: 240px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.gray400};
`;

const _SelectWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const _OptionWrapper = styled.div`
  position: absolute;
  top: 48px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.gray400};
`;

const _Option = styled.div`
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  :hover {
    background-color: ${({ theme }) => theme.color.primary600};
    color: ${({ theme }) => theme.color.gray25};
  }
`;
