import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { AddImage } from '../../assets/img';
import { Text } from '../text';

interface PropsType {
  label: string;
  imageList: string[];
}

export const ImageInput = ({ label, imageList }: PropsType) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const render = new FileReader();
    render.readAsDataURL;
  };
  return (
    <_Wrapper>
      <_Label size="title2" color="gray500">
        {label}
      </_Label>
      <_ImageWrapper>
        <_ImgInput id="imgInput" type="file" onChange={() => {}} />
        <label htmlFor="imgInput">
          <_Image src={AddImage} />
        </label>
        {imageList.map((img) => (
          <_Image src={img} />
        ))}
      </_ImageWrapper>
    </_Wrapper>
  );
};

const _Wrapper = styled.div``;

const _ImageWrapper = styled.div`
  width: 100%;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  overflow-x: auto;
`;

const _ImgInput = styled.input`
  display: none;
`;

const _Image = styled.img`
  width: 200px;
  height: 100px;
`;

const _Label = styled(Text)`
  margin-bottom: 5px;
`;
