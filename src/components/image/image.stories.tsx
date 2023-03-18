import React, { useState } from 'react';
import { ImageInput } from './index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeEvent } from 'react';
import { Image } from '../../assets/svg';
import { ClickImg } from '../../assets/imgs';
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
  'label' | 'imageList' | 'imgToUrl' | 'onChagne'
>;

const Template: ComponentStoryType<DefaultProps> = (arg) => {
  const [state, setState] = useState<string[]>([
    'https://storage.surfit.io/career/portfolio/cover/wo9NR/22355437964143740239c1.jpg',
  ]);

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
      {...arg}
      label="이미지 (최대 10개)"
      imageList={state}
      imgToUrl={imgToUrl}
      onChagne={onChange}
    />
  );
};

const templateBind = templateBindRequireAllArgs(Template);

export const standard = templateBind({ isLoading: false });

export const loading = templateBind({ isLoading: true });
