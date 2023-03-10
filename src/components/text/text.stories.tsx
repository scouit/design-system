import React from 'react';
import { Text } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

export default {
  title: 'component/text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Size: ComponentStory<typeof Text> = () => {
  return (
    <_Wrapper>
      <Text size="heading1" color="gray700">
        안녕하세요 여러분들 반갑습니다.
      </Text>
      <Text size="heading2" color="gray700">
        안녕하세요 여러분들 반갑습니다.
      </Text>
      <Text size="heading3" color="gray700">
        안녕하세요 여러분들 반갑습니다.
      </Text>
      <Text size="heading4" color="gray700">
        안녕하세요 여러분들 반갑습니다.
      </Text>
      <Text size="title1" color="gray700">
        안녕하세요 여러분들 반갑습니다.
      </Text>
      <Text size="title2" color="gray700">
        안녕하세요 여러분들 반갑습니다.
      </Text>
      <Text size="title3" color="gray700">
        안녕하세요 여러분들 반갑습니다.
      </Text>
      <Text size="title4" color="gray700">
        안녕하세요 여러분들 반갑습니다.
      </Text>
      <Text size="body1" color="gray700">
        안녕하세요 여러분들 반갑습니다.
      </Text>
      <Text size="body2" color="gray700">
        안녕하세요 여러분들 반갑습니다.
      </Text>
      <Text size="body3" color="gray700">
        안녕하세요 여러분들 반갑습니다.
      </Text>
      <Text size="body4" color="gray700">
        안녕하세요 여러분들 반갑습니다.
      </Text>
    </_Wrapper>
  );
};

export const Color = () => {
  return (
    <_Wrapper>
      <Text size="title2" color="gray700">
        안녕하세요 여러분들 반갑습니다.
      </Text>
      <Text size="title2" color="primary700">
        안녕하세요 여러분들 반갑습니다.
      </Text>
      <Text size="title2" color="error700">
        안녕하세요 여러분들 반갑습니다.
      </Text>
      <Text size="title2" color="warning700">
        안녕하세요 여러분들 반갑습니다.
      </Text>
      <Text size="title2" color="success700">
        안녕하세요 여러분들 반갑습니다.
      </Text>
    </_Wrapper>
  );
};

const alignExample = `토끼, 않은 이런 계절이 내일 하나에 별빛이 이네들은 봅니다. 이름과, 멀리 내 있습니다. 별에도 별 이름과, 이제 언덕 프랑시스 소학교 까닭입니다. 잔디가 소학교 둘 패, 어머니, 그리워 애기 듯합니다. 소녀들의 내일 노루, 별 가을 옥 이름과 내 있습니다. 같이 나는 오는 패, 이름과 새겨지는 둘 사람들의 듯합니다. 비둘기, 새겨지는 별 우는 않은 까닭입니다.`;

export const Align = () => {
  return (
    <_Wrapper>
      <div>
        <Text size="title2" color="gray700">
          Start
        </Text>
        <Text size="body1" color="gray700" align="start">
          {alignExample}
        </Text>
      </div>
      <div>
        <Text size="title2" color="gray700">
          Center
        </Text>
        <Text size="body1" color="gray700" align="center">
          {alignExample}
        </Text>
      </div>
      <div>
        <Text size="title2" color="gray700">
          End
        </Text>
        <Text size="body1" color="gray700" align="end">
          {alignExample}
        </Text>
      </div>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
