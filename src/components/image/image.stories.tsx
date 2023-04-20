import React, { useState } from 'react';
import { ImageInput } from './index';
import { ComponentMeta } from '@storybook/react';
import {
  ComponentStoryType,
  ObjectExclude,
  Parameter,
  templateBindRequireAllArgs,
} from '../../types/story';

export default {
  title: 'component/image',
  component: ImageInput,
} as ComponentMeta<typeof ImageInput>;

type DefaultProps = ObjectExclude<
  Parameter<typeof ImageInput>,
  'label' | 'imageList' | 'imgToUrl' | 'onChagne' | 'isLoading'
>;

const testPromise = () => {
  const [isLoading, setLoad] = useState<boolean>(false);
  const imgToUrl = (value: File) =>
    new Promise<string>((resolve, reject) => {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
        resolve(URL.createObjectURL(value));
      }, 1000);
    });
  return { isLoading, imgToUrl };
};

export const Template: ComponentStoryType<DefaultProps> = (arg) => {
  const [state, setState] = useState<string[]>([
    'https://storage.surfit.io/career/portfolio/cover/wo9NR/22355437964143740239c1.jpg',
  ]);
  const { isLoading, imgToUrl } = testPromise();

  const onChange = ({ value, name }: { value: string[]; name: string }) => {
    setState(value);
  };

  return (
    <ImageInput
      isLoading={isLoading}
      label="이미지 (최대 10개)"
      imageList={state}
      imgToUrl={imgToUrl}
      onChagne={onChange}
      name=""
    />
  );
};

const templateBind = templateBindRequireAllArgs(Template);

export const standard = templateBind({ name: '' });
