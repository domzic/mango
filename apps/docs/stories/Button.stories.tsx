import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Carousel } from '@mango-ui/carousel';

export default {
  title: 'Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

export const Primary: ComponentStory<typeof Carousel> = () => <Carousel />;