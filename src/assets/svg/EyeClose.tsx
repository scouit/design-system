import styled from 'styled-components';
import { keyOfColor } from '../../styles/theme';

interface PropsType {
  color?: keyOfColor;
}

export const EyeClose = ({ color = 'gray700' }: PropsType) => (
  <_Svg width="18" height="18" viewBox="0 0 18 18" color={color}>
    <path
      d="M2.25 7.5C2.89396 8.28107 3.65257 8.96003 4.5 9.51375M4.5 9.51375C5.41216 10.1095 6.43083 10.5233 7.5 10.7325C8.49092 10.9231 9.50908 10.9231 10.5 10.7325C11.5692 10.5233 12.5878 10.1095 13.5 9.51375M4.5 9.51375L3.375 10.875M15.75 7.5C15.106 8.28107 14.3474 8.96003 13.5 9.51375M13.5 9.51375L14.625 10.875M7.5 10.7318L7.125 12.375M10.5 10.7318L10.875 12.375"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </_Svg>
);

const _Svg = styled.svg<PropsType>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  path {
    stroke: ${({ theme, color }) => theme.color[color]};
  }
`;
