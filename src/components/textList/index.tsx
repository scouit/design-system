import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { Plus, TrashCan } from '../../assets/svg';

interface PropsType {
  textList: string[];
  onChange: (value: string[]) => void;
  placeholder: string;
}

export const TextList = ({ textList, onChange, placeholder }: PropsType) => {
  const onItemChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const temp = [...textList];
    temp.splice(Number(name), 1, value);
    onChange(temp);
  };
  const AddItem = () => {
    onChange(textList.concat(''));
  };
  const RemoveItem = (index: number) => {
    const temp = [...textList];
    temp.splice(index, 1);
    onChange(temp);
  };
  return (
    <_Wrapper>
      {textList.map((text, index) => (
        <_TextItem>
          <_Input
            value={text}
            name={String(index)}
            onChange={onItemChange}
            placeholder={placeholder}
          />
          <_Remove onClick={() => RemoveItem(index)}>
            <TrashCan />
          </_Remove>
        </_TextItem>
      ))}
      <_Add onClick={AddItem}>
        <Plus />
      </_Add>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const _TextItem = styled.div`
  display: flex;
  gap: 10px;
`;

const _Input = styled.input`
  width: 100%;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.color.gray500};
  color: ${({ theme }) => theme.color.gray500};
  padding: 0 16px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  ${({ theme }) => theme.font.heading3};
`;

const _Add = styled.div`
  width: calc(100% - 48px);
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.color.primary200};
  :hover {
    background-color: ${({ theme }) => theme.color.primary300};
  }
`;

const _Remove = styled(_Add)`
  cursor: pointer;
  width: 38px;
  border: 1px solid ${({ theme }) => theme.color.gray500};
  background-color: ${({ theme }) => theme.color.gray25};
  :hover {
    background-color: ${({ theme }) => theme.color.gray100};
  }
`;
