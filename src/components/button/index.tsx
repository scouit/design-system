import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { keyOfRadius } from '../../styles/theme';

const colorType = {
  text: ['gray25', 'gray25', 'gray100', 'gray200'],
  fill: ['gray400', 'primary500', 'primary600', 'primary700', 'gray25'],
  outline: ['gray400', 'primary200', 'primary300', 'primary400'],
  tonal: ['gray25', 'gray25', 'gray100', 'gray200', 'gray900', 'gray600'],
} as const;

type ColorType = keyof typeof colorType;

interface PropsType {
  align?: 'start' | 'center' | 'end';
  type?: ColorType;
  radius?: keyOfRadius;
  width?: 'auto' | '100%';
  height?: '45' | '40' | '38' | '37' | '36';
  disable?: boolean;
}

export const Button = styled.button<PropsType>`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: ${({ height = '45' }) => height}px;
  width: ${({ width = '100%' }) => width};
  border-radius: ${({ theme, radius }) => theme.borderRadius[radius]};
  justify-content: ${({ align }) => align};
  ${({ theme }) => theme.font.heading3};
  ${({ theme, type, disable }) => {
    const themeColor = theme.color;
    const [disableColor, standard, hover, active, paint, border] =
      colorType[type as ColorType];
    console.log(disable);
    return css`
      background-color: ${themeColor[disable ? disableColor : standard]};
      :hover {
        background-color: ${!disable && themeColor[hover]};
      }
      :active {
        background-color: ${!disable && themeColor[active]};
      }
      color: ${!disable && themeColor[paint]};
      border: ${border && `1px solid ${themeColor[border]}`};
      opacity: ${disable && '38%'};
      cursor: ${disable ? 'not-allowed' : 'pointer'};
    `;
  }};
`;
