import { ChevronLeft, ChevronRight } from 'react-feather';
import styled from 'styled-components';
import { useCarouselDispatch } from './state/Context';

export function Prev() {
    const dispatch = useCarouselDispatch();
    return (
        <PrevButton onClick={() => dispatch({ type: 'SHOW_PREV' })}>
            <span className="visually-hidden">Previous</span>
            <ChevronLeft />
        </PrevButton>
    );
}

export function Next() {
    const dispatch = useCarouselDispatch();
    return (
        <NextButton onClick={() => dispatch({ type: 'SHOW_NEXT' })}>
            <span className="visually-hidden">Next</span>
            <ChevronRight />
        </NextButton>
    );
}

const ButtonBase = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    margin: 8px;
    color: ${(props) => props.theme.colors.gray};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.2s ease;

    svg {
        display: block;
        color: currentColor;
    }

    &:hover {
        color: ${(props) => props.theme.colors.grayLight};
    }
`;

const PrevButton = styled(ButtonBase)`
    left: -42px;

    &:hover {
        transform: translateY(-50%) translateX(-4px);
    }
`;

const NextButton = styled(ButtonBase)`
    right: -42px;

    &:hover {
        transform: translateY(-50%) translateX(4px);
    }
`;
export const NavigationButton = Object.assign({}, { Prev, Next });
