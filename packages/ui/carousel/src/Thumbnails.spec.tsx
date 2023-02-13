import { render, screen } from './testUtils';
import { CarouselProvider } from './state/Context';
import { Thumbnails } from './Thumbnails';

describe('Thumbnails', () => {
    it('renders thumbnails correctly', () => {
        render(
            <CarouselProvider>
                <Thumbnails>
                    <div>First</div>
                    <div>Second</div>
                    <div>Third</div>
                </Thumbnails>
            </CarouselProvider>
        );

        expect(screen.getByRole('region')).toBeInTheDocument();
        expect(screen.getByText(/Thumbnails/)).toBeInTheDocument();
        expect(screen.getByText(/Prev/)).toBeInTheDocument();
        expect(screen.getByText(/Next/)).toBeInTheDocument();
    });
});
