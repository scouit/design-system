import React, { ChangeEvent, useState } from 'react';
import { Textarea } from './index';
import { ComponentMeta } from '@storybook/react';
import {
  ComponentStoryType,
  ObjectExclude,
  Parameter,
  templateBindRequireAllArgs,
} from '../../types/story';
import styled from 'styled-components';

export default {
  title: 'component/textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

type DefaultProps = ObjectExclude<
  Parameter<typeof Textarea>,
  'value' | 'onChange'
>;

const Template: ComponentStoryType<DefaultProps> = (args) => {
  const [state, setState] = useState({ content: '' });

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <_Wrapper>
      <Textarea {...args} value={state.content} onChange={onChange} />
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  margin-top: 100px;
`;

const templateBind = templateBindRequireAllArgs(Template);

export const stantard = templateBind({
  label: 'title',
  width: '490px',
  limit: 2000,
  name: 'content',
  placeholder: '자기소개서를 입력해 주세요',
});

export const star = templateBind({
  label: 'title',
  width: '490px',
  limit: 2000,
  name: 'content',
  placeholder: '자기소개서를 입력해 주세요',
  important: true,
});
