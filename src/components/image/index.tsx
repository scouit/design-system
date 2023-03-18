import { ChangeEvent, useRef } from 'react';
import styled from 'styled-components';
import { ClickImg } from '../../assets/imgs';
import { Exchange, Image, Trash } from '../../assets/svg';
import { Text } from '../text';

const buttonRadius = {
  left: '100px 0 0 100px',
  right: '0 100px 100px 0',
};

interface PropsType {
  label: string;
  imageList: string[];
  onChagne: (value: string) => void;
}

export const ImageInput = ({ label, imageList, onChagne }: PropsType) => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const onLabelClick = () => {
    fileRef.current.click();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    const render = new FileReader();
    render.readAsDataURL(file);
    render.onloadend = () => {
      const result = render.result;
      if (result) onChagne(result as string);
    };
  };
  return (
    <>
      <_Label size="title2" color="gray500">
        {label}
      </_Label>
      <_Wrapper>
        <_ImgInput
          id="imgInput"
          type="file"
          onChange={onChange}
          ref={fileRef}
        />
        <_ImageList>
          {imageList.map((img) => (
            <_ImageItem>
              <_Img src={img} />
              <_ImageItemBackground />
              <_ImageItemActive>
                <_ImageItemActiveButton kind="left" onClick={onLabelClick}>
                  <Exchange />
                </_ImageItemActiveButton>
                <_ImageItemActiveButton kind="right">
                  <Trash />
                </_ImageItemActiveButton>
              </_ImageItemActive>
            </_ImageItem>
          ))}
        </_ImageList>
        <div onClick={onLabelClick}>
          {imageList.length ? (
            <_AddImgWrapper>
              <Image />
            </_AddImgWrapper>
          ) : (
            <_AddImg src={ClickImg} />
          )}
        </div>
      </_Wrapper>
    </>
  );
};

const _Wrapper = styled.div`
  display: flex;
`;

const _ImageList = styled.div`
  max-width: 100%;
  display: flex;
  gap: 5px;
  padding: 10px 0;
  overflow-x: auto;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.primary500};
    border-radius: ${({ theme }) => theme.borderRadius.circle};
  }
`;

const _AddImg = styled.img`
  width: 250px;
  height: 125px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const _Img = styled(_AddImg)`
  border: 1px solid ${({ theme }) => theme.color.gray300};
`;

const _ImageItemBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.gray900};
  opacity: 30%;
  z-index: 1;
  top: 0;
`;

const _ImageItemActive = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _ImageItemActiveButton = styled.button<{ kind: 'left' | 'right' }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ kind }) => buttonRadius[kind]};
  background-color: ${({ theme }) => theme.color.gray25};
  :hover {
    background-color: ${({ theme }) => theme.color.gray100};
  }
`;

const _ImageItem = styled.div`
  position: relative;
  height: 125px;
  ${_ImageItemBackground}, ${_ImageItemActive} {
    visibility: hidden;
  }
  :hover {
    ${_ImageItemBackground}, ${_ImageItemActive} {
      visibility: visible;
    }
  }
`;

const _ImgInput = styled.input`
  display: none;
`;

const _AddImgWrapper = styled.div`
  cursor: pointer;
  width: 30px;
  height: 125px;
  margin: 10px 0 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.color.gray300};
`;

const _Label = styled(Text)`
  margin-bottom: 21px;
`;
