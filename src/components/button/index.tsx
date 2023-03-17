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

const heightSize = {
  tag: '28',
  select: '36',
  list: '37',
  smallButton: '40',
  LargeButton: '45',
};

type ColorType = keyof typeof colorType;
type typeColor = typeof colorType.tonal;

interface PropsType {
  kind?: ColorType;
  radius?: keyOfRadius;
  height?: keyof typeof heightSize;
  direction?: 'start' | 'center' | 'end' | 'space-between';
}

export const Button = styled.button<PropsType>`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: ${({ height }) => heightSize[height]}px;
  width: 100%;
  border-radius: ${({ theme, radius }) => theme.borderRadius[radius]};
  justify-content: ${({ direction = 'center' }) => direction};
  ${({ theme }) => theme.font.heading3};
  ${({ theme, kind = 'text' }) => {
    const themeColor = theme.color;
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
