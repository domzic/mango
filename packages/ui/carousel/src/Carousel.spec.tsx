import { render, screen, waitFor } from './testUtils';
import { CarouselProvider, useTotal } from './state/Context';
import { Carousel } from './Carousel';
import userEvent from '@testing-library/user-event';
import { CurrentIndexRenderer } from './test/CurrentIndexRenderer';

describe('Carousel', () => {
    beforeEach(() => {
        // scroll methods are not implemented by jsdom
        window.HTMLElement.prototype.scroll = function () {};
    });

    it('renders carousel correctly', () => {
        const ariaLabel = 'Test carousel';
        render(
            <CarouselProvider>
                <Carousel ariaLabel={ariaLabel}>
                    <Carousel.Item>First</Carousel.Item>
                    <Carousel.Item>Second</Carousel.Item>
                </Carousel>
            </CarouselProvider>
        );

        expect(screen.getAllByRole('region')).toHaveLength(2);
        expect(screen.getByText(ariaLabel)).toBeInTheDocument();
        expect(screen.getAllByText(/First/)).toHaveLength(2);
        expect(screen.getAllByText(/Second/)).toHaveLength(2);
    });

    it('updates current index on keyboard navigation', async () => {
        render(
            <CarouselProvider>
                <Carousel ariaLabel="">
                    <Carousel.Item>First</Carousel.Item>
                    <Carousel.Item>Second</Carousel.Item>
                </Carousel>
                <CurrentIndexRenderer />
            </CarouselProvider>
        );

        expect(screen.getByText('Current index: 0')).toBeInTheDocument();
        const mainRegion = screen.getAllByRole('region')[0];
        mainRegion.focus();
        userEvent.keyboard('{ArrowRight}');
        userEvent.keyboard('{ArrowLeft}');
        await waitFor(() => {
            expect(screen.getByText('Current index: 0')).toBeInTheDocument();
        });
    });
});
