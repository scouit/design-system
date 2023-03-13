import { ChangeEvent, useState, KeyboardEvent } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import styled, { css } from 'styled-components';
import { Block, React, SearchIcon } from '../../assets/svg';
import { useInversion } from '../../hooks/useInversion';
import { keyOfColor } from '../../styles/theme';
import { InputDropdown } from '../dropdown/Input';
import { Input } from '../input';
import { Text } from '../text';

export interface InputChangeType {
  value: string;
  name?: string;
}

export interface TagClickType {
  index: number;
  name?: string;
}

interface PropsType {
  width?: string;
  placeholder: string;
  name?: string;
  label?: string;
  onChange: ({ value, name }: InputChangeType) => void;
  onTagClick: ({ index, name }: TagClickType) => void;
  list: string[];
}

export const optionList = [
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
  const {
    state: dropdown,
    correctState: openDropdown,
    incorrectState: closeDropdown,
  } = useInversion();
  const [value, setValue] = useState('');

  const filterList = optionList
    .filter((data) => data.includes(value) && !list.includes(data))
    .slice(0, 5);

  const onOptionClick = (optionValue: string) => {
    onChange({ name, value: optionValue });
    setValue('');
    closeDropdown();
  };

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const onEnterInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' && filterList.includes(value)) {
      onChange({ name, value });
      setValue('');
    }
  };

  return (
    <InputDropdown
      dropdown={dropdown}
      list={filterList}
      onOptionClick={onOptionClick}
      onOutsideClick={closeDropdown}
    >
      <_Wrapper width={width}>
        <_Label size="title3" color="gray400">
          {label}
        </_Label>
        {list.map((skills, index) => (
          <_SkillWrapper
            backColor="gray900"
            color="gray25"
            size="body1"
            onClick={() => onTagClick({ name, index })}
          >
            <React />
            {skills}
          </_SkillWrapper>
        ))}

        <_Input
          value={value}
          name={name}
          onChange={onValueChange}
          placeholder={placeholder}
          onFocus={openDropdown}
          onKeyDown={onEnterInput}
        />
      </_Wrapper>
    </InputDropdown>
  );
};

const _SkillWrapper = styled(Text)<{ backColor: keyOfColor }>`
  cursor: pointer;
  border: 1px solid black;
  height: 28px;
  padding: 0 7px;
  margin: 12px 0;
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: 8px;
  background-color: ${({ theme, backColor }) => theme.color[backColor]};
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
  column-gap: 5px;
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

const _Input = styled.input`
  max-width: 100%;
  height: 52px;
  background-color: transparent;
  ${({ theme }) => theme.font.body1};
`;
