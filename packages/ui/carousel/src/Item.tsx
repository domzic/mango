import styled from 'styled-components';

interface ItemProps {
    children: React.ReactNode;
}
export function Item({ children, onClick, role }: ItemProps) {
    return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.li`
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    & img {
        display: block;
    }
`;
