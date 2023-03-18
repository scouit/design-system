import React, { useState } from 'react';
import { ImageInput } from './index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeEvent } from 'react';
import { Image } from '../../assets/svg';
import { ClickImg } from '../../assets/imgs';

export default {
  title: 'component/image',
  component: ImageInput,
} as ComponentMeta<typeof ImageInput>;

export const Template: ComponentStory<typeof ImageInput> = () => {
  const [state, setState] = useState<string[]>([]);

  const onChange = (value: string[]) => {
    setState(value);
  };

  const imgToUrl = (value: File) => {
    const form = new FormData();
    form.set('img', value);
    // api 작성해 주세요
    return ClickImg as Promise<string>;
  };

  return (
    <ImageInput
      label="이미지 (최대 10개)"
      imageList={state}
      imgToUrl={imgToUrl}
      isLoading={false}
      onChagne={onChange}
    />
  );
};
