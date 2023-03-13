import React, { ChangeEvent, useState } from 'react';
import { TagInput } from './index';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'component/tagInput',
  component: TagInput,
} as ComponentMeta<typeof TagInput>;

export const Template: ComponentStory<typeof TagInput> = () => {
  const [state, setState] = useState<string[]>([]);

  const onChange = (value: string) => {
    setState([...state, value]);
  };

  const removeTag = (index: number) => {
    const filter = state.filter((_, idx) => idx !== index);
    setState(filter);
  };

  return (
    <TagInput
      width="800px"
      placeholder="홀더"
      name="name"
      label="기술 스택"
      onChange={onChange}
      onTagClick={removeTag}
      list={state}
    />
  );
};
