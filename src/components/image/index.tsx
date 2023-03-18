import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Loading } from '../../assets/gif';
import { ClickImg } from '../../assets/imgs';
import { Exchange, Image, Trash } from '../../assets/svg';
import { Text } from '../text';

const buttonRadius = {
  left: '100px 0 0 100px',
  right: '0 100px 100px 0',
};

interface PropsType {
  label: string;
  isLoading: boolean;
  imageList: string[];
  imgToUrl: (value: File) => Promise<string>;
  onChagne: (value: string[]) => void;
}

export const ImageInput = ({
  label,
  imageList,
  isLoading,
  imgToUrl,
  onChagne,
}: PropsType) => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [index, setIndex] = useState<number | null>(null);

  const onLabelClick = (itemIdx?: number) => {
    if (isLoading) return;
    if (itemIdx !== undefined) setIndex(itemIdx);
    fileRef.current.click();
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    const render = new FileReader();
    render.readAsDataURL(file);
    render.onloadend = async () => {
      const url = await imgToUrl(file);
      onChagne(fileChangeOrAdd(url));
      setIndex(null);
    };
  };

  const fileChangeOrAdd = (value: string) => {
    const data = [...imageList];
    if (index !== null)
      return data.map((e, idx) => (idx === index ? value : e));
    return data.concat(value);
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
          onChange={onFileChange}
          ref={fileRef}
        />
        <_ImageList>
          {imageList.map((img, itemIdx) => (
            <_ImageItem>
              <_Img src={img} />
              <_ImageItemBackground />
              <_ImageItemActive>
                <_ImageItemActiveButton
                  kind="left"
                  onClick={() => onLabelClick(itemIdx)}
                >
                  <Exchange />
                </_ImageItemActiveButton>
                <_ImageItemActiveButton kind="right">
                  <Trash />
                </_ImageItemActiveButton>
              </_ImageItemActive>
            </_ImageItem>
          ))}
        </_ImageList>
        <div onClick={() => onLabelClick()}>
          {imageList.length ? (
            <_AddImgWrapper>
              {isLoading ? <_AddImgLeft src={Loading} /> : <Image />}
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
  margin: 10px 0;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const _AddImgLeft = styled.img`
  width: 24px;
  height: 24px;
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
  top: 10px;
`;

const _ImageItemActive = styled.div`
  position: absolute;
  z-index: 2;
  top: 10px;
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
