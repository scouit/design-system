import { useState } from 'react';
import styled from 'styled-components';
import { Arrow } from '../../assets/svg/Arrow';
import OutSideClick from 'react-outside-click-handler';
import { Text } from '../text';
import { useInversion } from '../../hooks/useInversion';

interface PropsType {
  placeholder: string;
  onOptionClick: (value: string) => void;
  value?: string;
  optionList: string[];
}

export const Select = ({
  value,
  onOptionClick,
  placeholder,
  optionList,
}: PropsType) => {
  const { state: dropdown, invertState, incorrectState } = useInversion();

  const onClickOption = (optionValue: string) => {
    onOptionClick(optionValue);
    incorrectState();
  };

  return (
    <OutSideClick display="inline-block" onOutsideClick={incorrectState}>
      <_Wrapper>
        <_SelectWrapper onClick={invertState}>
          <Text size="heading3" color={value ? 'gray700' : 'gray400'}>
            {value || placeholder}
          </Text>
          <Arrow dropdown={dropdown} />
        </_SelectWrapper>

        {dropdown && (
          <_OptionWrapper>
            {optionList.map((optionValue) => (
              <_Option
                size="heading3"
                color="gray700"
                onClick={() => onClickOption(optionValue)}
              >
                {optionValue}
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
  overflow: scroll;
  height: 185px;
`;

const _Option = styled(Text)`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 37px;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.color.primary600};
    color: ${({ theme }) => theme.color.gray25};
  }
  :not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.color.gray400};
  }
`;
