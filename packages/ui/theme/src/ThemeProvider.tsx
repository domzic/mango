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

const theme = {
    colors: {
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        grayDark: '#273444',
        gray: '#8492a6',
        grayLight: '#d3dce6',
    },
};
