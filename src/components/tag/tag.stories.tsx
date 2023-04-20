import React, { ChangeEvent, useState } from 'react';
import { InputChangeType, TagClickType, TagInput } from './index';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'component/tagInput',
  component: TagInput,
} as ComponentMeta<typeof TagInput>;

export const Template: ComponentStory<typeof TagInput> = () => {
  const [state, setState] = useState<string[]>([]);

  const onChange = ({ value, name }: InputChangeType) => {
    setState(value);
  };

  return (
    <TagInput
      width="800px"
      placeholder="홀더"
      onChange={onChange}
      list={state}
    />
  );
};
