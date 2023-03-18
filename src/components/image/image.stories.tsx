import React, { useState } from 'react';
import { ImageInput } from './index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeEvent } from 'react';

export default {
  title: 'component/image',
  component: ImageInput,
} as ComponentMeta<typeof ImageInput>;

export const Template: ComponentStory<typeof ImageInput> = () => {
  const [state, setState] = useState<string[]>([]);

  const onChange = (value: string) => {
    setState(state.concat(value));
  };

  return (
    <ImageInput
      label="이미지 (최대 10개)"
      imageList={state}
      onChagne={onChange}
    />
  );
};
