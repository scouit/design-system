import styled from 'styled-components';

interface PropsType {
  onClick?: () => void;
}

export const Calender = ({ onClick }: PropsType) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
  >
    <path
      d="M9 16.5C8.3 16.5 7.70833 16.2583 7.225 15.775C6.74167 15.2917 6.5 14.7 6.5 14C6.5 13.3 6.74167 12.7083 7.225 12.225C7.70833 11.7417 8.3 11.5 9 11.5C9.7 11.5 10.2917 11.7417 10.775 12.225C11.2583 12.7083 11.5 13.3 11.5 14C11.5 14.7 11.2583 15.2917 10.775 15.775C10.2917 16.2583 9.7 16.5 9 16.5ZM5 22C4.45 22 3.979 21.8043 3.587 21.413C3.19567 21.021 3 20.55 3 20V6C3 5.45 3.19567 4.97933 3.587 4.588C3.979 4.196 4.45 4 5 4H6V3C6 2.71667 6.09567 2.479 6.287 2.287C6.479 2.09567 6.71667 2 7 2C7.28333 2 7.521 2.09567 7.713 2.287C7.90433 2.479 8 2.71667 8 3V4H16V3C16 2.71667 16.096 2.479 16.288 2.287C16.4793 2.09567 16.7167 2 17 2C17.2833 2 17.5207 2.09567 17.712 2.287C17.904 2.479 18 2.71667 18 3V4H19C19.55 4 20.021 4.196 20.413 4.588C20.8043 4.97933 21 5.45 21 6V20C21 20.55 20.8043 21.021 20.413 21.413C20.021 21.8043 19.55 22 19 22H5ZM5 20H19V10H5V20Z"
      fill="black"
    />
  </svg>
)