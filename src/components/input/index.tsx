import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Block, EyeClose, EyeOpen, SearchIcon } from '../../assets/svg';

interface PropsType {
  label?: string;
  name?: string;
  hint?: string;
  value?: string;
  onChange?: () => void;
  placeholder?: string;
  onSearchIconClick?: () => void;
  onRemoveIconClick?: () => void;
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
  rightIconType,
  isError = false,
}: PropsType) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <_Wrapper isError={isError}>
      <_TextOnBorder isError={isError}>{label}</_TextOnBorder>
      {onSearchIconClick && (
        <SearchIcon color="gray400" onClick={onSearchIconClick} />
      )}
      <_ChangeInput
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={open ? 'text' : rightIconType}
      />
      <div
        onClick={
          {
            remove: onRemoveIconClick,
            password: () => setOpen(!open),
          }[rightIconType]
        }
      >
        {
          {
            remove: <Block />,
            password: open ? <EyeOpen /> : <EyeClose />,
          }[rightIconType]
        }
      </div>
      <_TextOnBorder isError={isError} isOutSide>
        {hint}
      </_TextOnBorder>
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ isError: boolean }>`
  position: relative;
  width: 240px;
  height: 42px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid
    ${({ theme, isError }) => theme.color[isError ? 'error600' : 'gray400']};
  background-color: ${({ theme }) => theme.color.gray25};
  display: flex;
  align-items: center;
  gap: 5px;
`;

const _TextOnBorder = styled.div<{ isError?: boolean; isOutSide?: boolean }>`
  position: absolute;
  color: ${({ theme, isError }) =>
    theme.color[isError ? 'error600' : 'gray300']};
  padding: 0 4px;
  background-color: ${({ theme }) => theme.color.gray25};
  left: 15px;
  ${({ theme, isOutSide }) =>
    isOutSide
      ? css`
          ${theme.font.heading4};
          bottom: -18px;
        `
      : css`
          ${theme.font.body4};
          top: -7px;
        `}
`;

const _ChangeInput = styled.input`
  width: 100%;
  flex: 1;
  ${({ theme }) => theme.font.body1};
  background-color: transparent;
`;
