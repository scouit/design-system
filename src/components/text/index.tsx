import { ReactNode } from 'react';
import styled from 'styled-components';
import { keyOfColor, keyOfFont } from '../../styles/theme';

interface PropsType {
  className?: string;
  as: keyof JSX.IntrinsicElements;
  lineHeight?: string;
  height?: string;
  align?: 'start' | 'center' | 'end';
  size?: keyOfFont;
  color?: keyOfColor;
  margin?: string;
  padding?: string;
  children: ReactNode;
}
export const Text = ({
  className,
  as,
  lineHeight,
  height,
  align,
  size,
  color,
  margin,
  padding,
  children,
}: PropsType) => {
  return (
    <_Wrapper
      className={className}
      as={as}
      lineHeight={lineHeight}
      height={height}
      align={align}
      size={size}
      color={color}
      margin={margin}
      padding={padding}
    >
      {children}
    </_Wrapper>
  );
};

const _Wrapper = styled.div<PropsType>`
  line-height: ${({ lineHeight }) => lineHeight};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding && padding};
  text-align: ${({ align }) => align};
  ${({ theme, size }) => theme.font[size]};

  color: ${({ theme, color }) => theme.color[color]};
  margin: ${({ margin }) => margin && margin};
`;
