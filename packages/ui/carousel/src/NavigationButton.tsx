import styled from 'styled-components';
import { useCarouselDispatch } from './state/Context';

interface NavigationButtonProps {
    children: React.ReactNode;
    position: 'left' | 'right';
}

export function NavigationButton({
    children,
    position,
}: NavigationButtonProps) {
    const dispatch = useCarouselDispatch();
    return (
        <Button
            onClick={() =>
                dispatch({
                    type: position === 'left' ? 'SHOW_PREV' : 'SHOW_NEXT',
                })
            }
        >
            {children}
        </Button>
    );
}

const Button = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    margin: 8px;

    svg {
        display: block;
    }
`;
