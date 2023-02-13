import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';

interface ThemeProviderProps {
    children: React.ReactNode | React.ReactNode[];
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <StyledComponentsProvider theme={theme}>
            {children}
        </StyledComponentsProvider>
    );
}

// TODO - create theme
const theme = {
    colors: {
        gray: '#8492a6',
        grayLight: '#d3dce6',
    },
};
