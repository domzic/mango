import React from 'react'
import { ThemeProvider } from '@mango-ui/theme'
import styled from 'styled-components'
import { Navigation } from './Navigation'
import { Item } from './Item'

interface CarouselProps {
    children: React.ReactNode[]
}
function CarouselRoot({ children }: CarouselProps) {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const childrenCount = React.Children.count(children)

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
            return
        }
        if (newIndex >= childrenCount) {
            setActiveIndex(childrenCount - 1)
        } else {
            setActiveIndex(newIndex)
        }
    }

    return (
        <ThemeProvider>
            <Wrapper>
                <Inner activeIndex={activeIndex}>{children}</Inner>
                <Navigation
                    currentIndex={activeIndex}
                    setCurrentIndex={updateIndex}
                />
            </Wrapper>
        </ThemeProvider>
    )
}
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

interface InnerProps {
    activeIndex: number
}
const Inner = styled.div<InnerProps>`
    white-space: nowrap;
    transition: transform 0.3s;
    transform: ${({ activeIndex }) => `translateX(-${activeIndex * 100}%)`};
`

export const Carousel = Object.assign(CarouselRoot, { Item })
