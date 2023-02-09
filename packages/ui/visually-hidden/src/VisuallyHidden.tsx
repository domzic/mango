import React from 'react';
import styled from 'styled-components';

interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode | React.ReactNode[];
}

export function VisuallyHidden(props: VisuallyHiddenProps) {
    const [forceShow, setForceShow] = React.useState(false);

    React.useEffect(() => {
        if (process.env.NODE_ENV !== 'production') {
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Alt') {
                    setForceShow(true);
                }
            };
            const handleKeyUp = (e: KeyboardEvent) => {
                if (e.key === 'Alt') {
                    setForceShow(false);
                }
            };
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('keyup', handleKeyUp);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
                window.removeEventListener('keyup', handleKeyUp);
            };
        }
    }, []);

    if (forceShow) {
        return <>props.children</>;
    }

    return <Wrapper {...props} />;
}

const Wrapper = styled.span`
    display: inline-block;
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
`;
