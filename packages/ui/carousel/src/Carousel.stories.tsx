import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Carousel } from './';
import { ThemeProvider, GlobalStyles } from '@mango-ui/theme';

export default {
    title: 'Carousel',
    component: Carousel,
    decorators: [
        (Story) => (
            <ThemeProvider>
                <GlobalStyles />
                <div style={{ maxWidth: 1024, margin: '0 auto' }}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
    <Carousel {...args}>
        <Carousel.Item>
            <img src={`https://picsum.photos/700/400?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/700/400?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/700/400?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/700/400?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/700/400?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/700/400?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/700/400?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/700/400?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/700/400?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/700/400?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/700/400?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/700/400?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/700/400?${Math.random()}`} />
        </Carousel.Item>
    </Carousel>
);

export const Default = Template.bind({});
Default.args = { interval: 2000, autoPlay: false };
