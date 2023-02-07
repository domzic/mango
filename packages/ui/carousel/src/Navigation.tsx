import styled from 'styled-components'

interface NavigationProps {
    currentIndex: number
    setCurrentIndex: (newIndex: number) => void
}
export function Navigation({ currentIndex, setCurrentIndex }: NavigationProps) {
    return (
        <Wrapper>
            <button onClick={() => setCurrentIndex(currentIndex--)}>
                Previous
            </button>
            <button onClick={() => setCurrentIndex(currentIndex++)}>
                Next
            </button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;

    & > button {
        margin: 5px;
    }
`
