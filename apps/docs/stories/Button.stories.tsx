import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Carousel } from '@mango-ui/carousel';
import { ThemeProvider, GlobalStyles } from '@mango-ui/theme';

export default {
    title: 'Carousel',
    component: Carousel,
    argTypes: {
        direction: {
            options: ['horizontal', 'vertical'],
            control: { type: 'select' },
        },
    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <GlobalStyles />
                <Story />
            </ThemeProvider>
        ),
    ],
} as ComponentMeta<typeof Carousel>;

export const Default: ComponentStory<typeof Carousel> = (props) => (
    <Carousel {...props}>
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
            <img src={`https://picsum.photos/700/250?${Math.random()}`} />
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

export const DisabledAutoPlay: ComponentStory<typeof Carousel> = (props) => (
    <Carousel autoPlay={false} {...props}>
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
            <img src={`https://picsum.photos/700/250?${Math.random()}`} />
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
