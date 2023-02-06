import { ThemeProvider } from "@mango-ui/theme";
import styled from "styled-components";

export function Carousel() {
  return (
    <ThemeProvider>
      <Wrapper>This is a carousel!</Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  color: red;
`;
