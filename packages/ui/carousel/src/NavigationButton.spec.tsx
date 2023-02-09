import { ThemeProvider } from '@mango-ui/theme';
import { render, screen } from './testUtils';
import { NavigationButton } from './NavigationButton';
import { CarouselProvider } from './state/Context';

describe('NavigationButton', () => {
    it('renders prev button', () => {
        render(
            <CarouselProvider>
                <NavigationButton.Prev />
            </CarouselProvider>
        );

        expect(screen.getByText(/Prev/)).toBeInTheDocument();
    });

    it('renders next button', () => {
        render(
            <CarouselProvider>
                <NavigationButton.Next />
            </CarouselProvider>
        );

        expect(screen.getByText(/Next/)).toBeInTheDocument();
    });
});
