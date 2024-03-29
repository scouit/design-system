import styled, { css } from 'styled-components';
import { directionType } from '../../types/direction';

interface PropsType {
  direction?: directionType;
  onClick?: () => void;
}

export const Arrow = ({ direction = 'top', onClick }: PropsType) => (
  <_Svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    direction={direction}
    onClick={onClick}
  >
    <path
      d="M9.00125 12.0013C8.7676 12.0017 8.54116 11.9203 8.36125 11.7713L2.36125 6.77125C2.15704 6.60151 2.02861 6.3576 2.00423 6.09318C1.97985 5.82875 2.06151 5.56547 2.23125 5.36125C2.40099 5.15704 2.6449 5.02861 2.90933 5.00423C3.17375 4.97985 3.43704 5.06151 3.64125 5.23125L9.00125 9.71125L14.3613 5.39125C14.4635 5.30819 14.5812 5.24615 14.7076 5.20872C14.8339 5.17129 14.9664 5.1592 15.0974 5.17314C15.2285 5.18708 15.3554 5.22677 15.4711 5.28995C15.5867 5.35312 15.6887 5.43853 15.7713 5.54125C15.8628 5.64407 15.9322 5.7647 15.975 5.89557C16.0178 6.02645 16.0331 6.16475 16.0199 6.30181C16.0068 6.43887 15.9655 6.57175 15.8986 6.6921C15.8317 6.81246 15.7407 6.91771 15.6313 7.00125L9.63125 11.8313C9.44617 11.9568 9.22435 12.0166 9.00125 12.0013Z"
      fill="black"
    />
  </_Svg>
);

const _Svg = styled.svg<PropsType>`
  cursor: pointer;
  transform: ${({ direction }) =>
    css`rotate(${
      {
        top: 0,
        right: 90,
        bottom: 180,
        left: 270,
      }[direction]
    }deg)`};
`;
