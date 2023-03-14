import React, { ChangeEvent, useState } from 'react';
import { DateInput } from './index';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'component/date',
  component: DateInput,
} as ComponentMeta<typeof DateInput>;

export const Template: ComponentStory<typeof DateInput> = (arg) => {
  const [state, setState] = useState<string[]>([]);

  return <DateInput {...arg} />;
};

Template.args = {
  margin_left: '0px',
};
