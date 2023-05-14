import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';
import { Text } from '../text';
import { ReactNode } from 'react';

interface PropsType {
  onOutsideClick: () => void;
  dropdown: boolean;
  list: string[];
  onOptionClick: (value: string) => void;
  display?: 'inline-block' | 'block';
  children: ReactNode;
}

export const filteringList = (
  list: string[],
  available: (data: string) => boolean
) => list.filter(available).slice(0, 5);

export const InputDropdown = ({
  onOutsideClick,
  dropdown,
  list,
  onOptionClick,
  display = 'block',
  children,
}: PropsType) => {
  return (
    <OutsideClickHandler display={display} onOutsideClick={onOutsideClick}>
      <_Wrapper>
        {children}
        {dropdown && (
          <_DropWrapper>
            {list.map((text) => (
              <_DropText
                as="button"
                size="body1"
                onClick={() => onOptionClick(text)}
              >
                {text}
              </_DropText>
            ))}
          </_DropWrapper>
        )}
      </_Wrapper>
    </OutsideClickHandler>
  );
};

const _Wrapper = styled.div`
  position: relative;
`;

const _DropWrapper = styled.div`
  position: absolute;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  left: 0;
  top: calc(100% + 10px);
  border: 1px;
  box-shadow: ${({ theme }) => theme.shadow.xl};
`;

const _DropText = styled(Text)`
  cursor: pointer;
  text-align: start;
  width: 100%;
  height: 36px;
  padding: 6.5px 16px;
  background-color: initial;
  :hover {
    background-color: ${({ theme }) => theme.color.gray100};
  }
`;
