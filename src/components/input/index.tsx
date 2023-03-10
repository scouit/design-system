import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Block, EyeClose, EyeOpen } from '../../assets/svg';
import { Text } from '../text';

interface PropsType {
  width?: string;
  label: string;
  name: string;
  hint?: string;
  value: string;
  onChange: () => void;
  placeholder: string;
  onRemoveIconClick?: () => void;
  PreviewIcon?: JSX.Element;
  rightIconType?: 'remove' | 'password';
  isError?: boolean;
}

export const Input = ({
  width = '100%',
  label,
  name,
  hint,
  value,
  onChange,
  placeholder,
  onRemoveIconClick,
  PreviewIcon,
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

  return (
    <_Wrapper width={width} isError={isError}>
      <_Label size="title3" color="gray400">
        {label}
      </_Label>
      {PreviewIcon}
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

const _Wrapper = styled.div<{ isError: boolean; width: string }>`
  position: relative;
  width: ${({ width }) => width};
  height: 44px;
  padding: 0 10px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
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
  :focus-within {
    box-shadow: ${({ theme }) => theme.shadow.primary};
  }
`;

const _ChangeInput = styled.input`
  width: 100%;
  flex: 1;
  ${({ theme }) => theme.font.body1};
`;
