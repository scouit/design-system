import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Block, EyeClose, EyeOpen, SearchIcon } from '../../assets/svg';
import { Text } from '../text';

interface PropsType {
  label: string;
  name: string;
  hint?: string;
  value: string;
  onChange: () => void;
  placeholder: string;
  onSearchIconClick?: () => void;
  onRemoveIconClick?: () => void;
  preViewIconType?: 'search';
  rightIconType?: 'remove' | 'password';
  isError?: boolean;
}

export const Input = ({
  label,
  name,
  hint,
  value,
  onChange,
  placeholder,
  onSearchIconClick,
  onRemoveIconClick,
  preViewIconType,
  rightIconType,
  isError = false,
}: PropsType) => {
  const [open, setOpen] = useState<boolean>(false);

  const RightIcon = {
    remove: {
      svg: <Block />,
      onClick: onRemoveIconClick,
    },
    password: {
      svg: open ? <EyeOpen /> : <EyeClose />,
      onClick: () => setOpen(!open),
    },
  };

  const PreViewIcon = {
    search: {
      svg: <SearchIcon color="gray400" />,
      onClick: onSearchIconClick,
    },
  };

  return (
    <_Wrapper isError={isError}>
      <_Label size="title3" color="gray400">
        {label}
      </_Label>
      {preViewIconType && (
        <div onClick={PreViewIcon[preViewIconType].onClick}>
          {PreViewIcon[preViewIconType].svg}
        </div>
      )}
      <_ChangeInput
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={open ? 'text' : rightIconType}
      />
      {rightIconType && (
        <div onClick={RightIcon[rightIconType].onClick}>
          {RightIcon[rightIconType].svg}
        </div>
      )}
      <_Hint size="body4" color="gray300">
        {hint}
      </_Hint>
    </_Wrapper>
  );
};

const _Label = styled(Text)`
  position: absolute;
  padding: 0 4px;
  background-color: ${({ theme }) => theme.color.gray25};
  left: 25px;
  top: -9px;
`;

const _Hint = styled(Text)<{ isError?: boolean }>`
  position: absolute;
  left: 15px;
  bottom: -18px;
`;

const _Wrapper = styled.div<{ isError: boolean }>`
  position: relative;
  width: 240px;
  height: 44px;
  padding: 0 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.gray25};
  display: flex;
  align-items: center;
  gap: 5px;
  ${({ theme, isError }) => {
    const currentColor = theme.color[isError ? 'error600' : 'gray400'];
    return css`
      border: 1px solid ${currentColor};
      ${_Label}, ${_Hint} {
        color: ${currentColor};
      }
    `;
  }}
`;

const _ChangeInput = styled.input`
  width: 100%;
  flex: 1;
  ${({ theme }) => theme.font.body1};
  background-color: transparent;
`;
