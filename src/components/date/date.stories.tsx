import React, { ChangeEvent, useState } from 'react';
import { DateInput } from './index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DateValueType } from '../../hooks/useCalender';

export default {
  title: 'component/date',
  component: DateInput,
} as ComponentMeta<typeof DateInput>;

const getDate = new Date();

export const Template: ComponentStory<typeof DateInput> = (arg) => {
  const [state, setState] = useState<DateValueType | null>(null);

  const onOkButtonClick = (value: DateValueType) => {
    setState(value);
  };

  return (
    <DateInput
      placeholder="YYYY-MM-DD"
      onOkButtonClick={onOkButtonClick}
      value={state}
    />
  );
};
