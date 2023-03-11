import styled from 'styled-components';
import { Arrow } from '../../assets/svg/Arrow';
import OutSideClick from 'react-outside-click-handler';
import { Text } from '../text';
import { useInversion } from '../hooks/useInversion';
import { ChangeEvent } from 'react';

interface InputonChangeType {
  value: string;
  name: string;
}

interface PropsType {
  placeholder: string;
  name: string;
  type: 'select' | 'input';
  onClickOrChange: ({ value, name }: InputonChangeType) => void;
  value?: string;
  optionList: string[];
}

export const Select = ({
  value,
  name,
  type,
  onClickOrChange,
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
    onClickOrChange({ value, name });
    incorrectState();
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onClickOrChange(e.target);
  };

  const stopBubble = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const Element = {
    select: (
      <Text size="heading3" color={value ? 'gray700' : 'gray400'}>
        {value || placeholder}
      </Text>
    ),
    input: (
      <_SelectInput
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChangeInput}
        onClick={stopBubble}
        onFocus={correctState}
      />
    ),
  }[type];

  const isDownAndExist = dropdown && !!optionList.length;

  return (
    <OutSideClick display="inline-block" onOutsideClick={incorrectState}>
      <_Wrapper>
        <_SelectWrapper onClick={invertState}>
          {Element}
          <Arrow dropdown={dropdown} />
        </_SelectWrapper>
        {isDownAndExist && (
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
