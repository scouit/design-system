import React, { ChangeEvent, useState } from 'react';
import { DateInput } from './index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DateValueType } from '../../hooks/useCalender';

export default {
  title: 'component/date',
  component: DateInput,
} as ComponentMeta<typeof DateInput>;

export const Template: ComponentStory<typeof DateInput> = (arg) => {
  const [state, setState] = useState<DateValueType | undefined>(undefined);

  const onOkButtonClick = (value: DateValueType) => {
    setState(value);
  };
  const notInclude = 'notIncludeDay';
  const include = 'includeDay';

  return (
    <DateInput
      {...arg}
      placeholder="YYYY-MM-DD"
      onOkButtonClick={onOkButtonClick}
      value={state}
    />
  );
};

Template.args = {
  type: 'notIncludeDay',
};
