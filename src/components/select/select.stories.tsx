import React, { ChangeEvent, useState } from 'react';
import { Select } from './index';
import { ComponentMeta } from '@storybook/react';
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
  'name' | 'value' | 'onChange' | 'optionList' | 'label'
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

interface PropsType {
  value: string;
  name: string;
}

const Template: ComponentStoryType<DefaultProps> = (args) => {
  const [state, setState] = useState('');

  const onChange = ({ value, name }: PropsType) => {
    setState(value);
  };

  return (
    <Select
      {...args}
      name="skill"
      label="기술 스택"
      value={state}
      onChange={onChange}
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
