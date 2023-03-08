import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Block, EyeClose, EyeOpen, SearchIcon } from '../../assets/svg';
import { keyOfColor } from '../../styles/theme/color';

interface PropsType {
  label: string;
  hint: string;
  placeholder?: string;
  onSearchIconClick?: () => void;
  onRemoveIconClick?: () => void;
  inputRightIconType?: 'remove' | 'password';
  isError: boolean;
}

export const Input = ({
  label = '',
  hint = '',
  placeholder = '',
  onSearchIconClick = undefined,
  onRemoveIconClick = undefined,
  inputRightIconType = undefined,
  isError = false,
}: PropsType) => {
  const [open, setOpen] = useState<boolean>(false);
  console.log(hint);
  return (
    <_Wrapper isError={isError}>
      <_TextOnBorder isError={isError}>{label}</_TextOnBorder>
      <_Content>
        {onSearchIconClick && (
          <SearchIcon color="gray400" onClick={onSearchIconClick} />
        )}
        <_ChangeInput
          placeholder={placeholder}
          type={open ? inputRightIconType : 'text'}
        />
        {
          {
            remove: <Block onClick={onRemoveIconClick} />,
            password: (
              <div onClick={() => setOpen(!open)}>
                {open ? <EyeOpen /> : <EyeClose />}
              </div>
            ),
          }[inputRightIconType]
        }
      </_Content>
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
  gap: 5px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid
    ${({ theme, isError }) => theme.color[isError ? 'error600' : 'gray400']};
  background-color: ${({ theme }) => theme.color.gray25};
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const _Content = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex: 1;
`;

const _TextOnBorder = styled.div<{ isError?: boolean; isOutSide?: boolean }>`
  position: absolute;
  color: ${({ theme, isError }) =>
    theme.color[isError ? 'error600' : 'gray400']};
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
  min-width: 0;
  width: 168px;
  border: 0;
  ${({ theme }) => theme.font.body1};
  background-color: transparent;
`;
