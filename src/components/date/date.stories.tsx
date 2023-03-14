import React, { ChangeEvent, useState } from 'react';
import { DateInput } from './index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { dateInitiValue, DateValueType } from '../../hooks/useCalender';

export default {
  title: 'component/date',
  component: DateInput,
} as ComponentMeta<typeof DateInput>;

export const Template: ComponentStory<typeof DateInput> = (arg) => {
  const [state, setState] = useState<DateValueType>(
    dateInitiValue('includeDay')
  );

  const onDateClick = (value: DateValueType) => {
    setState(value);
  };

  return (
    <>
      <div>
        {state.year}/{state.month + 1}/{state.day}
      </div>
      <DateInput onDateClick={onDateClick} value={state} />
    </>
  );
};
