import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';
import { Text } from '../text';
import { ReactNode } from 'react';

interface PropsType {
  onOutsideClick: () => void;
  dropdown: boolean;
  list: string[];
  onOptionClick: (value: string) => void;
  display?: string;
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
  display = '100%',
  children,
}: PropsType) => {
  return (
    <_Wrapper width={display}>
      <OutsideClickHandler
        display={display === 'fit-content' ? 'inline-block' : 'block'}
        onOutsideClick={onOutsideClick}
      >
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
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ width?: string }>`
  position: relative;
  width: ${({ width }) => width};
`;

const _DropWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 100;
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
