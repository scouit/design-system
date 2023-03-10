import React, { useState } from 'react';
import { Select } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'component/select',
  component: Select,
} as ComponentMeta<typeof Select>;

export const Template: ComponentStory<typeof Select> = () => {
  const [value, setValue] = useState<string>('');
  return (
    <Select
      placeholder="placeholder"
      value={value}
      onOptionClick={setValue}
      options={['Select Component1', 'Select Component2', 'Select Component3']}
    />
  );
};
