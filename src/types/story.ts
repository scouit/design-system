import { ComponentStory, Story } from '@storybook/react';

type StoryRequiredArgs<TArgs> = Story<TArgs> & { args: TArgs };

export const templateBindRequireAllArgs =
  <TArgs>(template: Story<TArgs>) =>
  (args: TArgs): StoryRequiredArgs<TArgs> => {
    const bind = template.bind({});
    bind.args = args;
    return bind;
  };

export type Parameter<F> = F extends (...args: infer P) => unknown
  ? P[0]
  : never;

type OptionalKeys<T> = Exclude<
  { [P in keyof T]: undefined extends T[P] ? P : never }[keyof T],
  undefined
>;

export type ObjectExclude<Obj, Key extends keyof Obj> = {
  [P in Exclude<keyof Obj, Key | OptionalKeys<Obj>>]: Obj[P];
} & {
  [P in OptionalKeys<Obj>]?: Obj[P];
};

export type ComponentStoryType<P> = ComponentStory<(props: P) => JSX.Element>;