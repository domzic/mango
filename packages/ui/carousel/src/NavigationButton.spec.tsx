import { screen } from './testUtils';
import { NavigationButton } from './NavigationButton';
import { renderWithCarousel } from './test/renderWithCarousel';
import { useCurrentIndex } from './state/Context';

describe('NavigationButton', () => {
    it('renders prev button', () => {
        renderWithCarousel(<NavigationButton.Prev />);

        expect(screen.getByText(/Prev/)).toBeInTheDocument();
    });

    it('renders next button', () => {
        renderWithCarousel(<NavigationButton.Next />);

        expect(screen.getByText(/Next/)).toBeInTheDocument();
    });
});
