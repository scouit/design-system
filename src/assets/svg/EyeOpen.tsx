import styled from 'styled-components';
import { keyOfColor } from '../../styles/theme/color';

interface PropsType {
  color?: keyOfColor;
}

export const EyeOpen = ({ color = 'gray700' }: PropsType) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <_Path
      d="M11.9999 4.5C6.99988 4.5 2.72988 7.61 0.999878 12C2.72988 16.39 6.99988 19.5 11.9999 19.5C16.9999 19.5 21.2699 16.39 22.9999 12C21.2699 7.61 16.9999 4.5 11.9999 4.5ZM11.9999 17C9.23988 17 6.99988 14.76 6.99988 12C6.99988 9.24 9.23988 7 11.9999 7C14.7599 7 16.9999 9.24 16.9999 12C16.9999 14.76 14.7599 17 11.9999 17ZM11.9999 9C10.3399 9 8.99988 10.34 8.99988 12C8.99988 13.66 10.3399 15 11.9999 15C13.6599 15 14.9999 13.66 14.9999 12C14.9999 10.34 13.6599 9 11.9999 9Z"
      fill={color}
    />
  </svg>
);

const _Path = styled.path<{ fill: keyOfColor }>`
  fill: ${({ theme, color }) => theme.color[color]};
`;
