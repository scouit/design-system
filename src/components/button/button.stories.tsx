import { Button } from './index';
import { ComponentMeta } from '@storybook/react';
import {
  ComponentStoryType,
  ObjectExclude,
  Parameter,
  templateBindRequireAllArgs,
} from '../../types/story';
import styled from 'styled-components';
import { React } from '../../assets/svg';

export default {
  title: 'component/button',
  component: Button,
} as ComponentMeta<typeof Button>;

type DefaultProps = ObjectExclude<
  Parameter<typeof Button>,
  'value' | 'name' | 'onChange' | 'placeholder'
>;

const Template: ComponentStoryType<DefaultProps> = (args) => {
  return (
    <>
      <Button {...args} onClick={() => {}}>
        프로필 저장
      </Button>
      <Button
        {...args}
        height={45}
        disabled
        onClick={() => {}}
      >
        <Icon />
        프로필 저장
      </Button>
    </>
  );
};

const Icon = styled(React)`
  > path {
    color: blue;
  }
`;

const templateBind = templateBindRequireAllArgs(Template);

export const text = templateBind({
  kind: 'text',
  radius: 'small',
  height: 'smallButton',
});

export const fill = templateBind({
  kind: 'fill',
  radius: 'circle',
  height: 'smallButton',
});

export const outline = templateBind({
  kind: 'outline',
  radius: 'small',
  height: 'smallButton',
});

export const tonal = templateBind({
  kind: 'tonal',
  radius: 'medium',
  height: 'smallButton',
});
