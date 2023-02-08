import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useCarouselDispatch, useCurrentIndex } from './state/Context';

interface ThumbnailItem {
    children: React.ReactNode;
    index: number;
}
export function ThumbnailItem({ children, index }: ThumbnailItem) {
    const currentIndex = useCurrentIndex();
    const dispatch = useCarouselDispatch();
    const [isActive, setIsActive] = React.useState(false);
    const ref = React.useRef<HTMLLIElement>(null);
    const prevCurrentIndex = React.useRef(currentIndex);

    React.useEffect(() => {
        setIsActive(currentIndex === index);
    }, [currentIndex, index]);

    React.useEffect(() => {
        if (
            (prevCurrentIndex.current > currentIndex &&
                index == currentIndex - 1) ||
            (prevCurrentIndex.current < currentIndex &&
                index == currentIndex + 1)
        ) {
            ref.current!.scrollIntoView({ behavior: 'smooth' });
        }
    }, [index, currentIndex]);

    React.useEffect(() => {
        return () => {
            prevCurrentIndex.current = currentIndex;
        };
    }, [currentIndex]);

    const handleSelect = () => {
        dispatch({
            type: 'SHOW_SELECTED',
            payload: index,
        });
    };

    const onKeyPress = (e: React.KeyboardEvent<HTMLLIElement>) => {
        switch (e.code) {
            case 'Enter':
                return handleSelect();
            default:
                return;
        }
    };

    return (
        <Wrapper
            ref={ref}
            role="button"
            className={isActive ? 'active' : ''}
            tabIndex={0}
            onClick={handleSelect}
            onKeyDown={onKeyPress}
        >
            {children}
        </Wrapper>
    );
}

const animateGradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const Wrapper = styled.li`
    height: 100%;
    width: 84px;
    flex: 1 0 64px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1px;
    margin: 1px;
    background: #fff;
    box-shadow: 0px 0px 8px -4px rgb(0 0 0 / 80%);
    position: relative;
    border-radius: 4px;

    & img {
        display: block;
        height: 100%;
        width: 100%;
        border-radius: 2px;
        object-fit: cover;
    }

    &.active {
        --borderWidth: 2px;
        &:after {
            content: '';
            position: absolute;
            top: calc(-1 * var(--borderWidth));
            left: calc(-1 * var(--borderWidth));
            height: calc(100% + var(--borderWidth) * 2);
            width: calc(100% + var(--borderWidth) * 2);
            background: linear-gradient(
                60deg,
                ${(props) => props.theme.colors.background.primary},
                ${(props) => props.theme.colors.background.secondary},
                ${(props) => props.theme.colors.background.tertiary},
                ${(props) => props.theme.colors.background.primary},
                ${(props) => props.theme.colors.background.secondary},
                ${(props) => props.theme.colors.background.tertiary}
            );
            border-radius: calc(2 * var(--borderWidth));
            z-index: -1;
            animation: ${animateGradient} 5s ease alternate infinite;
            background-size: 200% 200%;
        }
    }
`;
