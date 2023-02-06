import styled from "styled-components";

interface CarouselItemProps {
  children: React.ReactNode;
}
export function CarouselItem({ children }: CarouselItemProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.li`
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
