import styled from 'styled-components';

interface ItemProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export function Item({ children, ...props }: ItemProps) {
    return (
        <Wrapper
            role="group"
            aria-roledescription="slide"
            tabIndex={-1}
            {...props}
        >
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.div`
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
