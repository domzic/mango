import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

import styled from 'styled-components';
import { NavigationButton } from './NavigationButton';
import { ThumbnailItem } from './ThumbnailItem';

interface ThumbnailsProps {
    children: React.ReactNode | React.ReactNode[];
    height?: number;
}
export function Thumbnails({ children, height = 64 }: ThumbnailsProps) {
    return (
        <Container>
            <NavigationButton position="left">
                <ChevronLeft />
            </NavigationButton>
            <List style={{ '--thumbnails-height': height + 'px' }}>
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
            </List>
            <NavigationButton position="right">
                <ChevronRight />
            </NavigationButton>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const List = styled.ol`
    position: relative;
    width: max(50%, 300px);
    overflow-x: auto;
    white-space: nowrap;
    height: var(--thumbnails-height);
    padding: 8px;

    & li:not(:last-of-type) {
        margin-right: 4px;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;
