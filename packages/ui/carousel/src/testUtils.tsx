import { ThemeProvider } from '@mango-ui/theme';
import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

// TODO - move to separate package

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
