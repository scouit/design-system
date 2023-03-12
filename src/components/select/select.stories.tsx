import React, { useState } from 'react';
import { Select } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  ComponentStoryType,
  ObjectExclude,
  Parameter,
  templateBindRequireAllArgs,
} from '../../types/story';

export default {
  title: 'component/select',
  component: Select,
} as ComponentMeta<typeof Select>;

type DefaultProps = ObjectExclude<
  Parameter<typeof Select>,
  'name' | 'value' | 'onClickOrChange' | 'optionList'
>;

const optionList = [
  'react',
  'typescript',
  'javascript',
  'html',
  'css',
  'next',
  'redux',
  'react-query',
  'redux-saga',
  'redux-thunk',
  'mobX',
  'XXX',
];

const Template: ComponentStoryType<DefaultProps> = (args) => {
  const [state, setState] = useState({ name: '' });

  const onClickOrChange = ({ value, name }) => {
    setState({ ...state, [name]: value });
  };

  return (
    <Select
      {...args}
      name="name"
      value={state.name}
      onClickOrChange={onClickOrChange}
      optionList={optionList}
    />
  );
};

const templateBind = templateBindRequireAllArgs(Template);

export const select = templateBind({
  isInput: false,
  placeholder: '기술 스택을 선택해 주세요',
});

export const input = templateBind({
  isInput: true,
  placeholder: '기술 스택을 입력해 주세요',
});
