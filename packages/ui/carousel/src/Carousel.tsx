import React from 'react';
import { ThemeProvider } from '@mango-ui/theme';
import styled from 'styled-components';
import { Item } from './Item';
import {
    CarouselProvider,
    useCarouselDispatch,
    useCurrentIndex,
    useTotal,
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
    const total = useTotal();
    const dispatch = useCarouselDispatch();
    const [isPaused, setIsPaused] = React.useState(false);
    const [transitionEnabled, setTransitionEnabled] = React.useState(true);

    React.useEffect(() => {
        if (currentIndex === 1 || currentIndex === total) {
            setTransitionEnabled(true);
        }
    }, [currentIndex, total]);

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

    const handlePrev = () => {
        setTransitionEnabled(currentIndex !== 0);
        dispatch({ type: 'SHOW_PREV' });
    };

    const handleNext = () => {
        setTransitionEnabled(currentIndex !== total - 1);
        dispatch({ type: 'SHOW_NEXT' });
    };

    const onKeyPress = (e: React.KeyboardEvent<HTMLOListElement>) => {
        setIsPaused(true);
        switch (e.code) {
            case 'ArrowRight':
                return handleNext();
            case 'ArrowLeft':
                return handlePrev();
            default:
                return;
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleNext,
        onSwipedRight: handlePrev,
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
            style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: !transitionEnabled
                    ? 'none'
                    : 'transform 0.3s ease-in-out',
            }}
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

const Inner = styled.section<{ currentIndex: number }>`
    white-space: nowrap;
    outline: none;
`;

export const Carousel = Object.assign(CarouselRoot, { Item });
