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

interface Theme {
    colors: {
        background: {
            primary: string;
            secondary: string;
            tertiary: string;
        };
    };
}
const theme: Theme = {
    colors: {
        background: {
            primary: 'hsl(148,60%,40%)',
            secondary: 'hsl(352,100%,62%)',
            tertiary: 'hsl(33, 100%, 64%)',
        },
    },
};
