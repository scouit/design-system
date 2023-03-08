import React from 'react';
import { Input } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'component/input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
export const contain = Template.bind({});

contain.args = {
  borderText: 'label',
  onSearchIconClick: () => {},
  onRemoveIconClick: () => {},
  inputRightIconType: 'remove',
};

export const contain2 = Template.bind({});

contain2.args = {
  borderText: 'label',
  onSearchIconClick: () => {},
  onRemoveIconClick: () => {},
  inputRightIconType: 'password',
};
