import { ReactNode } from 'react';
import styled from 'styled-components';
import { keyOfColor, keyOfFont } from '../../styles/theme';

interface PropsType {
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  height?: string;
  align?: 'start' | 'center' | 'end';
  size: keyOfFont;
  color: keyOfColor;
  children: ReactNode;
}
export const Text = ({
  className,
  as,
  height,
  align,
  size,
  color,
  children,
}: PropsType) => {
  return (
    <_Wrapper
      className={className}
      as={as}
      height={height}
      align={align}
      size={size}
      color={color}
    >
      {children}
    </_Wrapper>
  );
};

const _Wrapper = styled.div<PropsType>`
  height: ${({ height }) => height};
  text-align: ${({ align }) => align};
  ${({ theme, size }) => theme.font[size]};

  color: ${({ theme, color }) => theme.color[color]};
`;
