import React, { useState } from 'react';
import { DateInput } from './index';
import { ComponentMeta } from '@storybook/react';
import { DateValueType } from '../../hooks/useCalender';
import {
  ComponentStoryType,
  ObjectExclude,
  Parameter,
  templateBindRequireAllArgs,
} from '../../types/story';

export default {
  title: 'component/date',
  component: DateInput,
} as ComponentMeta<typeof DateInput>;

type DefaultProps = ObjectExclude<
  Parameter<typeof DateInput>,
  'onSubmitAtInput' | 'value'
>;

const Template: ComponentStoryType<DefaultProps> = (arg) => {
  const [state, setState] = useState<DateValueType | undefined>(undefined);

  const onSubmitAtInput = (value: DateValueType) => {
    setState(value);
  };

  return <DateInput {...arg} onSubmitAtInput={onSubmitAtInput} value={state} />;
};

const templateBind = templateBindRequireAllArgs(Template);

export const DayCalender = templateBind({
  placeholder: 'YYYY-MM-DD',
  isDayInclude: true,
});

export const MonthCalender = templateBind({
  placeholder: 'YYYY-MM-DD',
  isDayInclude: false,
});
