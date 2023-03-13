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
    if (name) {
      setState({ ...state, [name]: [...state[name], value] });
    } else {
      setState([...state, value]);
    }
  };

  const removeTag = ({ index, name }: TagClickType) => {
    const filter = state.filter((_, idx) => idx !== index);
    if (name) {
      setState({ ...state, [name]: filter });
    } else {
      setState(filter);
    }
  };

  return (
    <TagInput
      width="800px"
      placeholder="홀더"
      onChange={onChange}
      onTagClick={removeTag}
      list={state}
    />
  );
};
