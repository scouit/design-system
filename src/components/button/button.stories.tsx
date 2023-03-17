import React, { useState } from 'react';
import { Button } from './index';
import { ComponentMeta } from '@storybook/react';
import { SearchIcon } from '../../assets/svg';
import {
  ComponentStoryType,
  ObjectExclude,
  Parameter,
  templateBindRequireAllArgs,
} from '../../types/story';
import { optionList } from '../tag';

export default {
  title: 'component/button',
  component: Button,
} as ComponentMeta<typeof Button>;

type DefaultProps = ObjectExclude<
  Parameter<typeof Button>,
  'value' | 'name' | 'onChange' | 'placeholder'
>;

const Template: ComponentStoryType<DefaultProps> = (args) => {
  return (
    <>
      <Button {...args} onClick={() => console.log(1)}>
        프로필 저장
      </Button>
      <Button
        {...args}
        direction="start"
        disabled
        onClick={() => console.log(1)}
      >
        프로필 저장
      </Button>
    </>
  );
};

const templateBind = templateBindRequireAllArgs(Template);

export const text = templateBind({
  kind: 'text',
  radius: 'small',
  height: 'smallButton',
});

export const fill = templateBind({
  kind: 'fill',
  radius: 'circle',
  height: 'smallButton',
});

export const outline = templateBind({
  kind: 'outline',
  radius: 'small',
  height: 'smallButton',
});

export const tonal = templateBind({
  kind: 'tonal',
  radius: 'medium',
  height: 'smallButton',
});
