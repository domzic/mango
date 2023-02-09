import { VisuallyHidden } from '@mango-ui/visually-hidden';
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
        <Container
            style={
                {
                    '--thumbnails-height': height + 'px',
                } as React.CSSProperties
            }
        >
            <NavigationButton.Prev />
            <List
                role="region"
                tabIndex={-1}
                aria-labelledby="thumbnails-heading"
            >
                <VisuallyHidden id="thumbnails-heading">
                    Thumbnails
                </VisuallyHidden>
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
            <NavigationButton.Next />
        </Container>
    );
}

const Container = styled.div`
    position: absolute;
    bottom: 16px;
    left: 0;
    right: 0;
    width: max(50%, 300px);
    margin: 0 auto;
    padding: 8px;
    height: var(--thumbnails-height);
`;

const List = styled.section`
    overflow-x: auto;
    white-space: nowrap;
    padding-inline-start: 0;
    padding: 4px;

    li {
        height: 100%;
    }

    & li:not(:last-of-type) {
        margin-right: 4px;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;
