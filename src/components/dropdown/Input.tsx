import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';
import { Text } from '../text';
import { ReactNode } from 'react';

interface PropsType {
  onOutsideClick: () => void;
  dropdown: boolean;
  list: string[];
  onOptionClick: (value: string) => void;
  children: ReactNode;
}

export const InputDropdown = ({
  onOutsideClick,
  dropdown,
  list,
  onOptionClick,
  children,
}: PropsType) => {
  console.log(dropdown);
  console.log(list);
  return (
    <OutsideClickHandler display="inline-block" onOutsideClick={onOutsideClick}>
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
  border-radius: 8px;
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
`;
