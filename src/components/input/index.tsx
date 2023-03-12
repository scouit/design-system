import { HTMLInputTypeAttribute, ChangeEvent } from 'react';
import styled, { css } from 'styled-components';
import { Block, EyeClose, EyeOpen } from '../../assets/svg';
import { useInversion } from '../../hooks/useInversion';
import { Text } from '../text';

interface PropsType {
  width?: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  hint?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  PreviewIcon?: JSX.Element;
  rightIconType?: {
    type: 'remove' | 'eye';
    onClick?: () => void;
  };
  isError?: boolean;
}

export const Input = ({
  width = '100%',
  label,
  type = 'text',
  name,
  hint,
  value,
  onChange,
  placeholder,
  PreviewIcon,
  rightIconType,
  isError = false,
}: PropsType) => {
  const { state: isHide, invertState: invertEye } = useInversion(true);

  const Icon = {
    remove: {
      icon: <Block />,
      onClick: rightIconType.onClick,
    },
    eye: {
      icon: isHide ? <EyeClose /> : <EyeOpen />,
      onClick: invertEye,
    },
  };

  const isHideText = isHide && rightIconType.type === 'eye';

  return (
    <_Wrapper width={width} isError={isError}>
      <_Label size="title3" color="gray400">
        {label}
      </_Label>
      {PreviewIcon}
      <_Input
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={isHideText ? 'password' : type}
      />
      {rightIconType &&
        (() => {
          const { onClick, icon } = Icon[rightIconType.type];
          return <div onClick={onClick}>{icon}</div>;
        })()}
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

const _Hint = styled(Text)`
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

const _Input = styled.input`
  width: 100%;
  background-color: transparent;
  ${({ theme }) => theme.font.body1};
`;
