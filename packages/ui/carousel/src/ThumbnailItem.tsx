import React from 'react';
import styled from 'styled-components';
import { useCarouselDispatch, useCurrentIndex } from './state/Context';

interface ThumbnailItem {
    children: React.ReactNode;
    index: number;
}
export function ThumbnailItem({ children, index }: ThumbnailItem) {
    const currentIndex = useCurrentIndex();
    const dispatch = useCarouselDispatch();

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
            role="button"
            className={index === currentIndex ? 'active' : ''}
            tabIndex={0}
            onClick={handleSelect}
            onKeyDown={onKeyPress}
        >
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.li`
    height: 100%;
    flex: 1 0 64px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &.active {
        outline: -webkit-focus-ring-color auto 1px;
    }

    & img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;
