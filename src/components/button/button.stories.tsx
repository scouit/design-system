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
    <Button {...args} disable={true}>
      프로필 저장
    </Button>
  );
};

const templateBind = templateBindRequireAllArgs(Template);

export const text = templateBind({
  type: 'text',
  radius: 'small',
  align: 'center',
  height: '45',
  width: '100%',
});

export const fill = templateBind({
  type: 'fill',
  radius: 'small',
  align: 'center',
  height: '45',
  width: '100%',
});

export const outline = templateBind({
  type: 'outline',
  radius: 'small',
  align: 'center',
  height: '45',
  width: '100%',
});

export const tonal = templateBind({
  type: 'tonal',
  radius: 'small',
  align: 'center',
  height: '45',
  width: '100%',
});
