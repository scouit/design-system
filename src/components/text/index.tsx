import styled from 'styled-components';
import { keyOfColor, keyOfFont } from '../../styles/theme';

interface PropsType {
  align?: 'start' | 'center' | 'end';
  size: keyOfFont;
  color: keyOfColor;
}
export const Text = styled.div<PropsType>`
  text-align: ${({ align }) => align};
  ${({ theme, size = 'body1' }) => theme.font[size]};

  color: ${({ theme, color = 'gray900' }) => theme.color[color]};
`;
