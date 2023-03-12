import styled from 'styled-components';
import { Arrow } from '../../assets/svg/Arrow';
import OutsideClick from 'react-outside-click-handler';
import { Text } from '../text';
import { useInversion } from '../../hooks/useInversion';
import { ChangeEvent } from 'react';

interface PropsType {
  placeholder: string;
  name: string;
  label: string;
  isInput?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionClick: (value: string) => void;
  value?: string;
  optionList: string[];
}

export const Select = ({
  value,
  name,
  label,
  isInput = false,
  onChange,
  onOptionClick,
  placeholder,
  optionList,
}: PropsType) => {
  const {
    state: dropdown,
    invertState,
    incorrectState,
    correctState,
  } = useInversion();

  const onClickOption = (value: string) => {
    onOptionClick(value);
    incorrectState();
  };

  const clearValue = () => {
    if (!optionList.includes(value)) {
      onOptionClick('');
    }
    incorrectState();
  };

  const stopBubble = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const filterOrNotList = isInput
    ? optionList.filter((data) => data.includes(value))
    : optionList;

  const isDownAndExist = dropdown && !!filterOrNotList.length;

  return (
    <OutsideClick display="inline-block" onOutsideClick={clearValue}>
      <_Wrapper>
        <_Label size="body3">{label}</_Label>
        <_SelectWrapper onClick={invertState}>
          {isInput ? (
            <_SelectInput
              value={value}
              name={name}
              placeholder={placeholder}
              onChange={onChange}
              onClick={stopBubble}
              onFocus={correctState}
            />
          ) : (
            <Text size="heading3" color={value ? 'gray700' : 'gray400'}>
              {value || placeholder}
            </Text>
          )}
          <Arrow direction={dropdown ? 'bottom' : 'top'} />
        </_SelectWrapper>
        {isDownAndExist && (
          <_OptionWrapper>
            {filterOrNotList.map((optionValue) => (
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
    </OutsideClick>
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
  overflow-y: scroll;
  max-height: 185px;
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

const _SelectInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  ${({ theme }) => theme.font.heading3};
  background-color: transparent;
  ::placeholder {
    color: ${({ theme }) => theme.color.gray400};
  }
`;

const _Label = styled(Text)`
  position: absolute;
  top: -20px;
`;
