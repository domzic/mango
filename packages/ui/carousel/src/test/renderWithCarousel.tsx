import { ReactElement } from 'react';
import { CarouselProvider, CarouselProviderProps } from '../state/Context';
import { render, RenderOptions } from '../testUtils';

const WithCarouselProvider = (props: CarouselProviderProps) => {
    return <CarouselProvider {...props} />;
};

export const renderWithCarousel = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => render(<WithCarouselProvider>{ui}</WithCarouselProvider>, { ...options });
