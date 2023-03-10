import { Story } from '@storybook/react';

type StoryRequiredArgs<TArgs> = Story<TArgs> & { args: TArgs };

export const templateBindRequireAllArgs = <TArgs>(
  template: Story<TArgs>
): StoryRequiredArgs<TArgs> => template.bind({}) as StoryRequiredArgs<TArgs>;
