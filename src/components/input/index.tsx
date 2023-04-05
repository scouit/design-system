import { HTMLInputTypeAttribute, ChangeEvent } from 'react';
import styled, { css } from 'styled-components';
import { Block, EyeClose, EyeOpen } from '../../assets/svg';
import { useInversion } from '../../hooks/useInversion';
import { filteringList, InputDropdown } from '../dropdown/Input';
import { Text } from '../text';

interface InputonChangeType {
  value: string;
  name: string;
}

interface PropsType {
  width?: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  hint?: string;
  value: string;
  onChange: ({ value, name }: InputonChangeType) => void;
  placeholder: string;
  PreviewIcon?: JSX.Element;
  rightIconType?: 'remove' | 'eye';
  isError?: boolean;
  searchList?: string[];
  disable?: boolean;
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
  searchList = [],
  disable = false,
}: PropsType) => {
  const { state: isHide, invertState: invertEye } = useInversion(true);
  const {
    state: dropdown,
    correctState: openDropdown,
    incorrectState: closeDropdown,
  } = useInversion();

  const Icon = {
    remove: {
      icon: <Block />,
      onClick: () => {
        onChange({ name, value: '' });
      },
    },
    eye: {
      icon: isHide ? <EyeClose /> : <EyeOpen />,
      onClick: invertEye,
    },
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({ value: e.target.value, name: e.target.name });
  };

  const onOptionClick = (text: string) => {
    onChange({ name, value: text });
    closeDropdown();
  };
  const filterList = filteringList(searchList, (data) => data.includes(value));

  const isHideInput = isHide && rightIconType === 'eye';
  const isShowDropdown = dropdown && !!searchList;

  return (
    <InputDropdown
      dropdown={isShowDropdown}
      list={filterList}
      onOptionClick={onOptionClick}
      onOutsideClick={closeDropdown}
    >
      <_Label size="title2" color="gray900">
        {label}
      </_Label>
      <_Wrapper width={width} isError={isError} disable={disable}>
        {PreviewIcon}
        <_Input
          value={value}
          name={name}
          onChange={onInputChange}
          placeholder={placeholder}
          type={isHideInput ? 'password' : type}
          onFocus={openDropdown}
          disabled={disable}
        />
        {rightIconType &&
          (() => {
            const { icon, onClick } = Icon[rightIconType];
            const disableClick = () => disable || onClick();
            return <div onClick={disableClick}>{icon}</div>;
          })()}
        <_Hint size="body4" color="gray300">
          {hint}
        </_Hint>
      </_Wrapper>
    </InputDropdown>
  );
};

const _Label = styled(Text)`
  margin-bottom: 8px;
`;

const _Hint = styled(Text)`
  position: absolute;
  left: 15px;
  bottom: -18px;
`;

const _Wrapper = styled.div<{
  isError: boolean;
  width: string;
  disable: boolean;
}>`
  position: relative;
  width: ${({ width }) => width};
  height: 48px;
  padding: 10px 12px;
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
  ${({ theme, disable }) => {
    const color = theme.color;
    return (
      disable &&
      css`
        background-color: ${color.gray200};
        border: 1px solid ${color.gray400};
        color: ${color.gray400};
        svg {
          cursor: default;
          > path {
            fill: ${color.gray400};
            stroke: ${color.gray400};
          }
        }
      `
    );
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
