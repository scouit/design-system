import React, { useState } from 'react';
import { Input } from './index';
import { ComponentMeta, Story } from '@storybook/react';
import { SearchIcon } from '../../assets/svg';
import {
  ComponentStoryType,
  ObjectExclude,
  Parameter,
  templateBindRequireAllArgs,
} from '../../types/story';
import { optionList } from '../tag';

export default {
  title: 'component/input',
  component: Input,
  args: {
    placeholder: '무언가를 입력해주세요.',
    name: 'email',
  },
} as ComponentMeta<typeof Input>;

type DefaultProps = ObjectExclude<
  Parameter<typeof Input>,
  'value' | 'name' | 'onChange' | 'placeholder'
>;

const Template: ComponentStoryType<DefaultProps> = (args) => {
  const [state, setState] = useState({ email: '', name: '' });

  const onChange = ({ value, name }) => {
    setState({ ...state, [name]: value });
  };

  return (
    //@ts-ignore
    <Input
      {...args}
      onChange={onChange}
      value={state.email}
      hint="support msg"
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

export const dropdown = templateBind({
  label: 'dropdown 테스트',
  searchList: optionList,
});
