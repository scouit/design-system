import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Block, EyeClose, EyeOpen, SearchIcon } from '../../assets/svg';
import { keyOfColor } from '../../styles/theme/color';

interface PropsType {
  borderText: string;
  onSearchIconClick?: () => void;
  onRemoveIconClick?: () => void;
  inputRightIconType?: 'remove' | 'password';
}

export const Input = ({
  borderText,
  onSearchIconClick,
  onRemoveIconClick,
  inputRightIconType,
}: PropsType) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <_Wrapper>
      <_TextOnBorder>{borderText}</_TextOnBorder>
      <_Content>
        <SearchIcon color="gray400" onClick={onSearchIconClick} />
        <_ChangeInput type={open ? inputRightIconType : 'text'} />
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
      <_TextOnBorder isOutSide>errorMsg</_TextOnBorder>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  position: relative;
  width: 240px;
  height: 42px;
  gap: 5px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.gray400};
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

const _TextOnBorder = styled.div<{ isError?: keyOfColor; isOutSide?: boolean }>`
  position: absolute;
  color: ${({ theme, isError }) =>
    theme.color[isError ? 'error600' : 'gray400']};
  padding: 0 4px;
  background-color: ${({ theme }) => theme.color.gray25};
  ${({ theme, isOutSide }) =>
    isOutSide
      ? css`
          ${theme.font.heading4};
          bottom: -18px;
          left: 15px;
        `
      : css`
          ${theme.font.body4};
          top: -7px;
          left: 15px;
        `}
`;

const _ChangeInput = styled.input`
  min-width: 0;
  width: 168px;
  border: 0;
  ${({ theme }) => theme.font.body1};
  background-color: transparent;
`;
