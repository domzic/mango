import { ThemeProvider as StyledComponentsProvider } from 'styled-components'

interface ThemeProviderProps {
    children: React.ReactNode | React.ReactNode[]
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <StyledComponentsProvider theme={theme}>
            {children}
        </StyledComponentsProvider>
    )
}

const theme = {}
