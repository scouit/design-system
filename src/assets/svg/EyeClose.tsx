import styled from 'styled-components';
import { keyOfColor } from '../../styles/theme/color';

interface PropsType {
  color?: keyOfColor;
}

export const EyeClose = ({ color = 'gray700' }: PropsType) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <_Path
      d="M3 10C3.85861 11.0414 4.87009 11.9467 6 12.685M6 12.685C7.21621 13.4793 8.57444 14.0311 10 14.31C11.3212 14.5641 12.6788 14.5641 14 14.31C15.4256 14.0311 16.7838 13.4793 18 12.685M6 12.685L4.5 14.5M21 10C20.1414 11.0414 19.1299 11.9467 18 12.685M18 12.685L19.5 14.5M10 14.309L9.5 16.5M14 14.309L14.5 16.5"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const _Path = styled.path<{ stroke: keyOfColor }>`
  stroke: ${({ theme, color }) => theme.color[color]};
`;
