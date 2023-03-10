import { useState } from 'react';
import styled from 'styled-components';
import { Arrow } from '../../assets/svg/Arrow';
import OutSideClick from 'react-outside-click-handler';
import { Text } from '../text';

interface PropsType {
  placeholder: string;
  onOptionClick: (value: string) => void;
  value?: string;
  options: string[];
}

export const Select = ({
  value,
  onOptionClick,
  placeholder,
  options,
}: PropsType) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  return (
    <OutSideClick
      display="inline-block"
      onOutsideClick={() => setDropdown(false)}
    >
      <_Wrapper>
        <_SelectWrapper onClick={() => setDropdown(!dropdown)}>
          <Text size="heading3" color={value ? 'gray700' : 'gray400'}>
            {value || placeholder}
          </Text>
          <Arrow dropdown={dropdown} />
        </_SelectWrapper>

        {dropdown && (
          <_OptionWrapper>
            {options.map((optionValue) => (
              <_Option
                onClick={() => {
                  onOptionClick(optionValue);
                  setDropdown(false);
                }}
              >
                <Text size="heading3" color="gray700">
                  {optionValue}
                </Text>
              </_Option>
            ))}
          </_OptionWrapper>
        )}
      </_Wrapper>
    </OutSideClick>
  );
};

const _Wrapper = styled.div`
  position: relative;
  height: 38px;
  width: 240px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.color.gray400};
`;

const _SelectWrapper = styled.div`
  cursor: pointer;
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
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.color.gray400};
`;

const _Option = styled(_SelectWrapper)`
  height: 37px;
  :hover {
    background-color: ${({ theme }) => theme.color.primary600};
    > div {
      color: ${({ theme }) => theme.color.gray25};
    }
  }
  :not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.color.gray400};
  }
`;
