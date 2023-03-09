import React from 'react';
import { Input } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'component/input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const contain1 = Template.bind({});

contain1.args = {
  onSearchIconClick: () => {},
  preViewIconType: 'search',
  label: 'Search',
};

export const contain2 = Template.bind({});

contain2.args = {
  label: 'Search',
  value: 'whtkdgus qudtls',
  onSearchIconClick: () => {},
  onRemoveIconClick: () => {},
  preViewIconType: 'search',
  rightIconType: 'remove',
};

export const contain3 = Template.bind({});

contain3.args = {
  label: 'title',
  value: 'whtkdgus qudtls',
  onSearchIconClick: undefined,
  hint: 'supporting text',
};

export const contain4 = Template.bind({});

contain4.args = {
  label: 'title',
  value: 'whtkdgus qudtls',
  hint: 'supporting text',
  onSearchIconClick: undefined,
  onRemoveIconClick: () => {},
  rightIconType: 'remove',
};

export const contain5 = Template.bind({});

contain5.args = {
  label: 'title',
  value: 'whtkdgus qudtls',
  hint: 'supporting text',
  onSearchIconClick: undefined,
  rightIconType: 'password',
};

export const contain6 = Template.bind({});

contain6.args = {
  label: 'title',
  value: 'whtkdgus qudtls',
  onSearchIconClick: undefined,
  hint: 'supporting text',
  isError: true,
};

export const contain7 = Template.bind({});

contain7.args = {
  label: 'title',
  value: 'whtkdgus qudtls',
  onSearchIconClick: undefined,
  onRemoveIconClick: () => {},
  rightIconType: 'remove',
  hint: 'supporting text',
  isError: true,
};

export const contain8 = Template.bind({});

contain8.args = {
  label: 'title',
  value: 'whtkdgus qudtls',
  onSearchIconClick: undefined,
  rightIconType: 'password',
  hint: 'supporting text',
  isError: true,
};
