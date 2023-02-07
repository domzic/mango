import React, { ReactElement } from 'react';

import styled from 'styled-components';
import { useCarouselDispatch } from './state/Context';
import { ThumbnailItem } from './ThumbnailItem';

interface ThumbnailsProps {
    children: React.ReactNode | React.ReactNode[];
    height?: number;
}
export function Thumbnails({ children, height = 48 }: ThumbnailsProps) {
    const dispatch = useCarouselDispatch();

    return (
        <Wrapper style={{ '--thumbnails-height': height + 'px' }}>
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    return typeof child.type === 'string' ? (
                        child
                    ) : (
                        <ThumbnailItem index={index}>
                            {child.props.children}
                        </ThumbnailItem>
                    );
                }
            })}
        </Wrapper>
    );
}

const Wrapper = styled.ol`
    display: flex;
    justify-content: center;
    gap: 4px;
    overflow: auto;
    height: var(--thumbnails-height);
    padding: 4px;

    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;
