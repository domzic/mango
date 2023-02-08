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
import { Pause } from 'react-feather';

interface CarouselProps {
    children: React.ReactNode[];
    autoPlay?: boolean;
    interval?: number;
}
function CarouselRoot(props: CarouselProps) {
    return (
        <ThemeProvider>
            <CarouselProvider>
                <Wrapper>
                    <CarouselInner {...props} />
                    <Thumbnails>{props.children}</Thumbnails>
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

type CarouselInnerProps = CarouselProps;

function CarouselInner({
    children,
    autoPlay = true,
    interval = 3000,
}: CarouselInnerProps) {
    const currentIndex = useCurrentIndex();
    const dispatch = useCarouselDispatch();
    const [isPaused, setIsPaused] = React.useState(false);

    React.useEffect(() => {
        if (!autoPlay) {
            return () => undefined;
        }

        const slideInterval = setInterval(() => {
            if (!isPaused) {
                dispatch({ type: 'SHOW_NEXT' });
            }
        }, interval);

        return () => {
            if (slideInterval) {
                clearInterval(slideInterval);
            }
        };
    }, [autoPlay, interval, isPaused]);

    React.useEffect(() => {
        dispatch({ type: 'SET_TOTAL', payload: children.length });
    }, [children.length]);

    return (
        <Inner
            currentIndex={currentIndex}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {children}
        </Inner>
    );
}

const Inner = styled.div<{ currentIndex: number }>`
    white-space: nowrap;
    transition: transform 0.3s ease-in-out;
    transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

export const Carousel = Object.assign(CarouselRoot, { Item });
