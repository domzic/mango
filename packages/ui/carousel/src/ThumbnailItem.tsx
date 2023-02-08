import React from 'react';
import styled from 'styled-components';
import {
    useCarouselDispatch,
    useCurrentIndex,
    useTotal,
} from './state/Context';

interface ThumbnailItem {
    children: React.ReactNode;
    index: number;
}
export function ThumbnailItem({ children, index }: ThumbnailItem) {
    const currentIndex = useCurrentIndex();
    const total = useTotal();
    const dispatch = useCarouselDispatch();
    const [isActive, setIsActive] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        setIsActive(currentIndex === index);
    }, [currentIndex, index]);

    React.useEffect(() => {
        if (isActive) {
            ref.current!.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isActive]);

    const handleSelect = () => {
        dispatch({
            type: 'SHOW_SELECTED',
            payload: index,
        });
    };

    const onKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
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
            aria-hidden={isActive ? 'false' : 'true'}
            aria-label={`Thumbnail ${index} of ${total}`}
            aria-current={isActive ? 'true' : 'false'}
        >
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 100%;
    width: 84px;
    flex: 1 0 64px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1px;
    margin: 4px;
    background: #fff;
    box-shadow: 0px 0px 8px -4px rgb(0 0 0 / 80%);
    position: relative;
    border-radius: 2px;

    & img {
        height: 100%;
        width: 100%;
        border-radius: 2px;
        object-fit: cover;
    }

    &.active {
        transform: scale(1.1);
        z-index: 1;
    }
`;
