import { ChangeEvent } from 'react';
import styled, { css } from 'styled-components';
import { Text } from '../text';

interface PropsType {
  placeholder: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  width?: string;
  limit?: number;
  important?: boolean;
}

export const Textarea = ({
  placeholder,
  name,
  label,
  value,
  onChange,
  width = '100%',
  limit = 2000,
  important = false,
}: PropsType) => {
  const cutValueOverFlowLimit = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    e.target.value = value.slice(0, limit);
    onChange(e);
  };

  return (
    <_Wrapper width={width}>
      <_Label size="title2">
        {label}
        {important && <_Important>*</_Important>}
      </_Label>
      <_Textarea
        name={name}
        value={value}
        onChange={cutValueOverFlowLimit}
        placeholder={placeholder}
      />
      <_TextLimit size="body4">
        ({value.length}/{limit})
      </_TextLimit>
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ width: string }>`
  position: relative;
  width: ${({ width }) => width};
`;

const _Label = styled(Text)`
  position: absolute;
  top: -28px;
`;

const _Important = styled.span`
  color: ${({ theme }) => theme.color.error600};
`;

const _Textarea = styled.textarea`
  width: 100%;
  height: 194px;
  padding: 18px;
  outline: 0;
  resize: none;
  ${({ theme }) => {
    const { font, color, shadow, borderRadius } = theme;
    return css`
      ${font.heading4};
      color: ${color.gray900};
      border-radius: ${borderRadius.medium};
      border: 1px solid ${color.gray200};
      background-color: ${color.gray50};
      :focus {
        box-shadow: ${shadow.primary};
        border: 1px solid ${color.primary600};
      }
    `;
  }}
`;

const _TextLimit = styled(Text)`
  text-align: end;
  margin-top: 8px;
`;
