import React from 'react';
import { ThemeProvider } from '@mango-ui/theme';
import styled from 'styled-components';
import { Item } from './Item';
import {
    CarouselProvider,
    useCarouselDispatch,
    useCurrentIndex,
} from './state/Context';
import { Thumbnails } from './Thumbnails';

interface CarouselProps {
    children: React.ReactNode[];
}
function CarouselRoot({ children }: CarouselProps) {
    return (
        <ThemeProvider>
            <CarouselProvider>
                <Wrapper>
                    <CarouselInner>{children}</CarouselInner>
                    <Thumbnails>{children}</Thumbnails>
                </Wrapper>
            </CarouselProvider>
        </ThemeProvider>
    );
}
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`;

interface CarouselInnerProps {
    children: React.ReactNode[];
}

function CarouselInner({ children }: CarouselInnerProps) {
    const currentIndex = useCurrentIndex();
    const dispatch = useCarouselDispatch();

    React.useEffect(() => {
        dispatch({ type: 'SET_TOTAL', payload: children.length });
    }, [children.length]);

    return <Inner currentIndex={currentIndex}>{children}</Inner>;
}

const Inner = styled.div<{ currentIndex: number }>`
    white-space: nowrap;
    transition: transform 0.3s ease-in-out;
    transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

export const Carousel = Object.assign(CarouselRoot, { Item });
