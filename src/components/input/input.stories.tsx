import React, { useState } from 'react';
import { Input } from './index';
import { ComponentMeta } from '@storybook/react';
import { SearchIcon } from '../../assets/svg';
import {
  ComponentStoryType,
  ObjectExclude,
  Parameter,
  templateBindRequireAllArgs,
} from '../../types/story';
import { ChangeEvent } from 'react';

export default {
  title: 'component/input',
  component: Input,
} as ComponentMeta<typeof Input>;

type DefaultProps = ObjectExclude<
  Parameter<typeof Input>,
  'value' | 'name' | 'onChange' | 'placeholder'
>;

const Template: ComponentStoryType<DefaultProps> = (args) => {
  const [state, setState] = useState({ email: '', name: '' });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <Input
      {...args}
      placeholder={'무언가를 입력해주세요.'}
      onChange={onChange}
      name={'email'}
      value={state.email}
    />
  );
};

const templateBind = templateBindRequireAllArgs(Template);

export const primary = templateBind({ label: '기본값' });

export const password = templateBind({
  label: '비밀번호 테스트',
  rightIconType: 'eye',
});

export const remove = templateBind({
  label: '삭제 테스트',
  rightIconType: 'remove',
});

export const previewIcon = templateBind({
  label: 'preview Icon 테스트',
  PreviewIcon: <SearchIcon />,
});
