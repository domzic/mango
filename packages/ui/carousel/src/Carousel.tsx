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
import { useSwipeable } from 'react-swipeable';

interface CarouselProps {
    children: React.ReactNode[];
    ariaLabel?: string;
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
    ariaLabel = 'Images carousel',
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
    }, [autoPlay, interval, isPaused, currentIndex]);

    React.useEffect(() => {
        dispatch({ type: 'SET_TOTAL', payload: children.length });
    }, [children.length]);

    const onKeyPress = (e: React.KeyboardEvent<HTMLOListElement>) => {
        setIsPaused(true);
        switch (e.code) {
            case 'ArrowRight':
                return dispatch({ type: 'SHOW_NEXT' });
            case 'ArrowLeft':
                return dispatch({ type: 'SHOW_PREV' });
            default:
                return;
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => dispatch({ type: 'SHOW_NEXT' }),
        onSwipedRight: () => dispatch({ type: 'SHOW_PREV' }),
    });

    return (
        <Inner
            {...swipeHandlers}
            currentIndex={currentIndex}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onKeyDown={onKeyPress}
            onKeyUp={() => setIsPaused(false)}
            tabIndex={-1}
            role="region"
            aria-labelledby="heading"
        >
            <h3 id="heading" className="visually-hidden">
                {ariaLabel}
            </h3>
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    return typeof child.type === 'string' ? (
                        child
                    ) : (
                        <Item
                            aria-label={`slide ${index} of ${children.length}`}
                            aria-hidden={index !== currentIndex}
                            aria-current={
                                index === currentIndex ? 'true' : 'false'
                            }
                        >
                            {child.props.children}
                        </Item>
                    );
                }
            })}
        </Inner>
    );
}

const Inner = styled.ol<{ currentIndex: number }>`
    white-space: nowrap;
    transition: transform 0.3s ease-in-out;
    transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
    outline: none;
`;

export const Carousel = Object.assign(CarouselRoot, { Item });
