import React from 'react';
import { Select } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'component/select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const contain1 = Template.bind({});

contain1.args = {
  value: 'Select Component',
  list: ['Select Component', 'Select Component', 'Select Component'],
};
