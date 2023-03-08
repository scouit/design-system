import styled from 'styled-components';
import { keyOfColor } from '../../styles/theme/color';

interface PropsType {
  color: keyOfColor;
  onClick?: () => void;
}

export const SearchIcon = ({ color, onClick }: PropsType) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={onClick}>
    <_Path
      d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.371 4.888 14.113C3.63 12.855 3.00067 11.3173 3 9.5C3 7.68333 3.62933 6.146 4.888 4.888C6.14667 3.63 7.684 3.00067 9.5 3C11.3167 3 12.854 3.62933 14.112 4.888C15.37 6.14667 15.9993 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C14 8.25 13.5623 7.18733 12.687 6.312C11.8117 5.43667 10.7493 4.99933 9.5 5C8.25 5 7.18733 5.43767 6.312 6.313C5.43667 7.18833 4.99933 8.25067 5 9.5C5 10.75 5.43767 11.8127 6.313 12.688C7.18833 13.5633 8.25067 14.0007 9.5 14Z"
      color={color}
    />
  </svg>
);

const _Path = styled.path<{ color: keyOfColor }>`
  fill: ${({ theme, color }) => theme.color[color]};
`;
