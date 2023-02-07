import styled from 'styled-components'
import { useCarouselDispatch } from './state/Context'

export function Navigation() {
    const dispatch = useCarouselDispatch()
    return (
        <Wrapper>
            <button onClick={() => dispatch({ type: 'SHOW_PREV' })}>
                Previous
            </button>
            <button onClick={() => dispatch({ type: 'SHOW_NEXT' })}>
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
