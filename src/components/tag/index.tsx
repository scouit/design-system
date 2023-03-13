import { ChangeEvent, useState, KeyboardEvent } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import styled, { css } from 'styled-components';
import { Block, SearchIcon } from '../../assets/svg';
import { useInversion } from '../../hooks/useInversion';
import { Input } from '../input';
import { Text } from '../text';

interface PropsType {
  width?: string;
  placeholder: string;
  name: string;
  label: string;
  onChange: (value: string) => void;
  onTagClick: (index: number) => void;
  list: string[];
}

const optionList = [
  'react',
  'typescript',
  'javascript',
  'html',
  'css',
  'next',
  'redux',
  'react-query',
  'redux-saga',
  'redux-thunk',
  'mobX',
  'XXX',
];

export const TagInput = ({
  width = '100%',
  name,
  label,
  onChange,
  onTagClick,
  placeholder,
  list,
}: PropsType) => {
  const { state: dropdown, incorrectState, correctState } = useInversion();
  const [value, setValue] = useState('');

  const filterList = optionList.filter(
    (data) => data.includes(value) && !list.includes(data)
  );

  const addIncludeList = () => {
    if (filterList.includes(value)) {
      onChange(value);
      setValue('');
    }
  };

  const onOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setValue('');
    incorrectState();
  };

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const onEnterInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      addIncludeList();
    }
  };

  return (
    <OutsideClickHandler display="inline-block" onOutsideClick={incorrectState}>
      <_Wrapper width={width}>
        <_Label size="title3" color="gray400">
          {label}
        </_Label>
        {list.map((skills, idx) => (
          <_Skill size="body1" onClick={() => onTagClick(idx)}>
            {skills}
          </_Skill>
        ))}
        <_InputWrapper>
          <SearchIcon onClick={addIncludeList} />
          <_Input
            value={value}
            name={name}
            onChange={onValueChange}
            placeholder={placeholder}
            onFocus={correctState}
            onKeyDown={onEnterInput}
          />
        </_InputWrapper>

        {dropdown && (
          <_DropWrapper>
            {filterList.map((list) => (
              <_DropText size="body1" onClick={() => onOptionClick(list)}>
                {list}
              </_DropText>
            ))}
          </_DropWrapper>
        )}
      </_Wrapper>
    </OutsideClickHandler>
  );
};

const _Skill = styled(Text)`
  border: 1px solid black;
  height: 28px;
  padding: 0 7px;
  margin: 12px 0;
`;

const _DropWrapper = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 8px;
  left: 0;
  top: calc(100% + 10px);
  border: 1px;
  box-shadow: ${({ theme }) => theme.shadow.xl};
`;

const _DropText = styled(Text)`
  height: 36px;
  padding: 6.5px 16px;
`;

const _Label = styled(Text)`
  position: absolute;
  padding: 0 4px;
  background-color: ${({ theme }) => theme.color.gray25};
  left: 25px;
  top: -9px;
`;

const _Hint = styled(Text)`
  position: absolute;
  left: 15px;
  bottom: -18px;
`;

const _Wrapper = styled.div<{ width: string }>`
  position: relative;
  width: ${({ width }) => width};
  padding: 0 10px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.color.gray25};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  ${({ theme }) => {
    const currentColor = theme.color.gray400;
    return css`
      border: 1px solid ${currentColor};
      ${_Label}, ${_Hint} {
        color: ${currentColor};
      }
    `;
  }}
  :focus-within {
    box-shadow: ${({ theme }) => theme.shadow.primary};
  }
`;

const _InputWrapper = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const _Input = styled.input`
  background-color: transparent;
  ${({ theme }) => theme.font.body1};
`;
