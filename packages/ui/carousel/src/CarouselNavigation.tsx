import styled from "styled-components";

interface CarouselNavigationProps {
  currentIndex: number;
  setCurrentIndex: (newIndex: number) => void;
}
export function CarouselNavigation({
  currentIndex,
  setCurrentIndex,
}: CarouselNavigationProps) {
  return (
    <Wrapper>
      <button onClick={() => setCurrentIndex(currentIndex--)}>Previous</button>
      <button onClick={() => setCurrentIndex(currentIndex++)}>Next</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  & > button {
    margin: 5px;
  }
`;
