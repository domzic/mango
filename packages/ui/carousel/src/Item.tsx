import styled from 'styled-components';

interface ItemProps {
    children: React.ReactNode;
}
export function Item({ children }: ItemProps) {
    return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.li`
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
        width: 100%;
        object-fit: cover;
    }

    &::after {
        content: '';
        position: absolute;
        background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.3) 20%,
            rgba(0, 0, 0, 0) 30%
        );
        z-index: 1;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    }
`;
