import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Carousel } from '@mango-ui/carousel';

export default {
    title: 'Carousel',
    component: Carousel,
    argTypes: {
        direction: {
            options: ['horizontal', 'vertical'],
            control: { type: 'select' },
        },
    },
} as ComponentMeta<typeof Carousel>;

export const Primary: ComponentStory<typeof Carousel> = (props) => (
    <Carousel {...props}>
        <Carousel.Item>
            <img src={`https://picsum.photos/400/250?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/400/250?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/400/250?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/400/250?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/400/250?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/400/250?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/300/250?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/400/250?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/400/250?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/400/250?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/400/250?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/400/250?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/400/250?${Math.random()}`} />
        </Carousel.Item>
        <Carousel.Item>
            <img src={`https://picsum.photos/400/250?${Math.random()}`} />
        </Carousel.Item>
    </Carousel>
);
