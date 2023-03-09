import styled from 'styled-components';
import { keyOfColor } from '../../styles/theme';

interface PropsType {
  color?: keyOfColor;
}

export const EyeOpen = ({ color = 'gray700' }: PropsType) => (
  <_Svg width="18" height="18" viewBox="0 0 18 18">
    <path
      d="M9 3.375C5.25 3.375 2.0475 5.7075 0.75 9C2.0475 12.2925 5.25 14.625 9 14.625C12.75 14.625 15.9525 12.2925 17.25 9C15.9525 5.7075 12.75 3.375 9 3.375ZM9 12.75C6.93 12.75 5.25 11.07 5.25 9C5.25 6.93 6.93 5.25 9 5.25C11.07 5.25 12.75 6.93 12.75 9C12.75 11.07 11.07 12.75 9 12.75ZM9 6.75C7.755 6.75 6.75 7.755 6.75 9C6.75 10.245 7.755 11.25 9 11.25C10.245 11.25 11.25 10.245 11.25 9C11.25 7.755 10.245 6.75 9 6.75Z"
      color={color}
    />
  </_Svg>
);

const _Svg = styled.svg<PropsType>`
  cursor: pointer;
  path {
    fill: ${({ theme, color }) => theme.color[color]};
  }
`;
