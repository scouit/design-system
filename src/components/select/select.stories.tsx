import React, { useState } from 'react';
import { Select } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'component/select',
  component: Select,
} as ComponentMeta<typeof Select>;

export const Template: ComponentStory<typeof Select> = () => {
  const [state, setState] = useState({ name: '' });

  const onOptionClick = ({ value, name }) => {
    setState({ ...state, [name]: value });
  };

  return (
    <Select
      placeholder="기술 스택을 입력해 주세요"
      name="name"
      type="input"
      value={state.name}
      onOptionClick={onOptionClick}
      optionList={['react', 'typescript', 'javascript', 'html', 'css']}
    />
  );
};

export const Template2: ComponentStory<typeof Select> = () => {
  const [state, setState] = useState({ name: '' });

  const onOptionClick = ({ value, name }) => {
    setState({ ...state, [name]: value });
  };

  return (
    <Select
      placeholder="기술 스택을 선택해 주세요"
      name="name"
      type="select"
      value={state.name}
      onOptionClick={onOptionClick}
      optionList={['react', 'typescript', 'javascript', 'html', 'css']}
    />
  );
};
