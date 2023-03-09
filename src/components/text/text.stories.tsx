import React from 'react';
import { Text } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'component/text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const contain1 = Template.bind({});

contain1.args = {
  size: 'title1',
  children: '안녕하세요 여러분들 반갑습니다.',
};

export const contain2 = Template.bind({});

contain2.args = {
  size: 'title2',
  children: '안녕하세요 여러분들 반갑습니다.',
};

export const contain3 = Template.bind({});

contain3.args = {
  size: 'title3',
  children: '안녕하세요 여러분들 반갑습니다.',
};

export const contain4 = Template.bind({});

contain4.args = {
  size: 'title4',
  children: '안녕하세요 여러분들 반갑습니다.',
};

export const contain5 = Template.bind({});

contain5.args = {
  size: 'body1',
  children: '안녕하세요 여러분들 반갑습니다.',
};

export const contain6 = Template.bind({});

contain6.args = {
  size: 'body2',
  children: '안녕하세요 여러분들 반갑습니다.',
};

export const contain7 = Template.bind({});

contain7.args = {
  size: 'body3',
  children: '안녕하세요 여러분들 반갑습니다.',
};

export const contain8 = Template.bind({});

contain8.args = {
  size: 'body4',
  children: '안녕하세요 여러분들 반갑습니다.',
};

export const contain9 = Template.bind({});

contain9.args = {
  size: 'heading1',
  children: '안녕하세요 여러분들 반갑습니다.',
};

export const contain10 = Template.bind({});

contain10.args = {
  size: 'heading2',
  children: '안녕하세요 여러분들 반갑습니다.',
};

export const contain11 = Template.bind({});

contain11.args = {
  size: 'heading3',
  children: '안녕하세요 여러분들 반갑습니다.',
};

export const contain12 = Template.bind({});

contain12.args = {
  size: 'heading4',
  children: '안녕하세요 여러분들 반갑습니다.',
};
