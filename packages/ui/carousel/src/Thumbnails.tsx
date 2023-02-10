import { VisuallyHidden } from '@mango-ui/visually-hidden';
import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

import styled from 'styled-components';
import { NavigationButton } from './NavigationButton';
import { ThumbnailItem } from './ThumbnailItem';

interface ThumbnailsProps {
    children: React.ReactNode | React.ReactNode[];
}
export function Thumbnails({ children }: ThumbnailsProps) {
    const sectionRef = React.useRef<HTMLDivElement>(null);

    const onActiveChange = (itemOffsetLeft: number) => {
        const width = sectionRef.current!.offsetWidth;
        sectionRef.current!.scroll({
            left: itemOffsetLeft - width / 2,
            behavior: 'smooth',
        });
    };

    return (
        <Container>
            <NavigationButton.Prev />
            <Section
                ref={sectionRef}
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
                            <ThumbnailItem
                                index={index}
                                onActive={onActiveChange}
                            >
                                {child.props.children}
                            </ThumbnailItem>
                        );
                    }
                })}
            </Section>
            <NavigationButton.Next />
        </Container>
    );
}

const Container = styled.div`
    position: absolute;
    bottom: 16px;
    left: 0;
    right: 0;
    width: max(50%, 400px);
    margin: 0 auto;
    height: 80px;
`;

const Section = styled.section`
    overflow-x: auto;
    overflow-y: hidden;
    height: 100%;
    white-space: nowrap;
    padding-inline-start: 0;
    padding: 10px;

    & li:not(:last-of-type) {
        margin-right: 4px;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`;
