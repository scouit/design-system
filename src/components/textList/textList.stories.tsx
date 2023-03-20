import React, { useState } from 'react';
import { TextList } from './index';
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
  title: 'component/textList',
  component: TextList,
} as ComponentMeta<typeof TextList>;

type DefaultProps = ObjectExclude<
  Parameter<typeof TextList>,
  'textList' | 'onChange' | 'placeholder'
>;

const Template: ComponentStoryType<DefaultProps> = (args) => {
  const [state, setState] = useState<string[]>(['']);

  const onChange = (value: string[]) => {
    setState(value);
  };

  return (
    <TextList
      textList={state}
      onChange={onChange}
      placeholder="상세업무를 작성해 주세요"
    />
  );
};

const templateBind = templateBindRequireAllArgs(Template);

export const primary = templateBind({});
