import styled, { css } from 'styled-components';
import { keyOfRadius } from '../../styles/theme';

const colorType = {
  text: {
    disable: 'gray25',
    standard: 'gray25',
    hover: 'gray100',
    active: 'gray200',
  },
  fill: {
    disable: 'gray400',
    standard: 'primary500',
    hover: 'primary600',
    active: 'primary700',
    color: 'gray25',
  },
  outline: {
    disable: 'gray400',
    standard: 'primary200',
    hover: 'primary300',
    active: 'primary400',
  },
  tonal: {
    disable: 'gray25',
    standard: 'gray25',
    hover: 'gray100',
    active: 'gray200',
    color: 'gray900',
    border: 'gray600',
  },
} as const;

type ColorType = keyof typeof colorType;
type typeColor = typeof colorType.tonal;

interface PropsType {
  align?: 'start' | 'center' | 'end';
  kind?: ColorType;
  radius?: keyOfRadius;
  width?: 'auto' | '100%';
  height?: '45' | '40' | '38' | '37' | '36';
  disabled?: boolean;
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
  ${({ theme, kind }) => {
    const themeColor = theme.color;
    console.log(colorType[kind]);
    const { disable, standard, hover, active, color, border } = colorType[
      kind
    ] as typeColor;

    return css`
      background-color: ${themeColor[standard]};
      :hover {
        background-color: ${themeColor[hover]};
      }
      :active {
        background-color: ${themeColor[active]};
      }
      color: ${themeColor[color]};
      border: ${border && `1px solid ${themeColor[border]}`};
      cursor: pointer;
      :disabled {
        background-color: ${themeColor[disable]};
        :hover {
          background-color: none;
        }
        :active {
          background-color: none;
        }
        opacity: 38%;
        color: ${themeColor.gray900};
        cursor: not-allowed;
      }
    `;
  }};
`;
