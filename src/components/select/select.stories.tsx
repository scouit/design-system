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
  'type' | 'placeholder'
>;

const Template: ComponentStoryType<DefaultProps> = ({ type, placeholder }) => {
  const [state, setState] = useState({ name: '' });

  const onClickOrChange = ({ value, name }) => {
    setState({ ...state, [name]: value });
  };

  return (
    <Select
      placeholder={placeholder}
      name="name"
      type={type}
      value={state.name}
      onClickOrChange={onClickOrChange}
      optionList={['react', 'typescript', 'javascript', 'html', 'css']}
    />
  );
};

const templateBind = templateBindRequireAllArgs(Template);

export const select = templateBind({ type: 'select', placeholder: '기술 스택을 선택해 주세요' });

export const input = templateBind({ type: 'input', placeholder: '기술 스택을 입력해 주세요' });
