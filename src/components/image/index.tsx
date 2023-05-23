import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Loading } from '../../assets/gif';
import { ClickImg } from '../../assets/png';
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
  name: string;
  imgToUrl: (value: File) => Promise<string>;
  onChange: (value: { value: string[]; name: string }) => void;
}

export const ImageInput = ({
  label,
  imageList,
  isLoading,
  name,
  imgToUrl,
  onChange,
}: PropsType) => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [clickedImage, setImageIndex] = useState<number | null>(null);

  const onChangeIncludeName = (value: string[]) => {
    onChange({ value, name });
  };

  const onListItemClick = (itemIdx?: number) => {
    if (isLoading) return;
    if (itemIdx !== undefined) setImageIndex(itemIdx);
    fileRef.current.click();
  };

  const onAddImgClick = () => onListItemClick();

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    const render = new FileReader();
    render.readAsDataURL(file);
    render.onloadend = async () => {
      const resultURL = await imgToUrl(file);
      onChangeIncludeName(fileChangeOrAdd(resultURL));
      setImageIndex(null);
    };
  };

  const fileChangeOrAdd = (value: string) => {
    if (clickedImage !== null)
      return imageList.map((e, idx) => (idx === clickedImage ? value : e));
    return imageList.concat(value);
  };

  const fileRemove = (itemIdx: number) => {
    const filteredList = imageList.filter((_, idx) => itemIdx !== idx);
    onChangeIncludeName(filteredList);
  };

  return (
    <div>
      <_Label size="title2" color="gray500">
        {label}
      </_Label>
      <_Wrapper>
        <_ImgInput
          id="imgInput"
          type="file"
          onChange={onFileChange}
          ref={fileRef}
          accept=".gif, .jpg, .png"
        />
        <_ImageList>
          {imageList.map((img, itemIdx) => (
            <_ImageItem>
              <_Img src={img} />
              <_ImageItemBackground />
              <_ImageItemActive>
                <_ImageItemActiveButton
                  kind="left"
                  onClick={() => onListItemClick(itemIdx)}
                >
                  <Exchange />
                </_ImageItemActiveButton>
                <_ImageItemActiveButton
                  kind="right"
                  onClick={() => fileRemove(itemIdx)}
                >
                  <Trash />
                </_ImageItemActiveButton>
              </_ImageItemActive>
            </_ImageItem>
          ))}
        </_ImageList>
        <div onClick={onAddImgClick}>
          {imageList.length ? (
            <_AddImgWrapper>
              {isLoading ? (
                <img width={24} height={24} src={Loading} />
              ) : (
                <Image />
              )}
            </_AddImgWrapper>
          ) : (
            <_AddImg src={ClickImg} />
          )}
        </div>
      </_Wrapper>
    </div>
  );
};

const _Wrapper = styled.div`
  display: flex;
`;

const _ImageList = styled.div`
  max-width: 100%;
  display: flex;
  gap: 20px;
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
  cursor: pointer;
  width: 250px;
  height: 125px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const _Img = styled(_AddImg)`
  cursor: move;
  border: 1px solid ${({ theme }) => theme.color.gray300};
`;

const _ImageItemBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.color.gray900};
  opacity: 30%;
  top: 0;
`;

const _ImageItemActive = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _ImageItemActiveButton = styled.button<{ kind: 'left' | 'right' }>`
  cursor: pointer;
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
  margin-bottom: 10px;
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
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.color.gray300};
`;

const _Label = styled(Text)`
  margin-bottom: 21px;
`;
