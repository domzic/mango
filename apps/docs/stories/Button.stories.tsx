import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Carousel, CarouselItem } from "@mango-ui/carousel";

export default {
  title: "Carousel",
  component: Carousel,
  argTypes: {
    direction: {
      options: ["horizontal", "vertical"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Carousel>;

export const Primary: ComponentStory<typeof Carousel> = (props) => (
  <Carousel {...props}>
    <CarouselItem>
      <img src={`https://picsum.photos/200/300?${Math.random()}`} />
    </CarouselItem>
    <CarouselItem>
      <img src={`https://picsum.photos/200/300?${Math.random()}`} />
    </CarouselItem>
    <CarouselItem>
      <img src={`https://picsum.photos/200/300?${Math.random()}`} />
    </CarouselItem>
    <CarouselItem>
      <img src={`https://picsum.photos/200/300?${Math.random()}`} />
    </CarouselItem>
    <CarouselItem>
      <img src={`https://picsum.photos/200/300?${Math.random()}`} />
    </CarouselItem>
    <CarouselItem>
      <img src={`https://picsum.photos/200/300?${Math.random()}`} />
    </CarouselItem>
    <CarouselItem>
      <img src={`https://picsum.photos/200/300?${Math.random()}`} />
    </CarouselItem>
  </Carousel>
);
