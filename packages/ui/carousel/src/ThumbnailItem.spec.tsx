import { render, screen, waitFor } from './testUtils';
import { CarouselProvider } from './state/Context';
import { ThumbnailItem } from './ThumbnailItem';
import userEvent from '@testing-library/user-event';
import { CurrentIndexRenderer } from './test/CurrentIndexRenderer';

describe('ThumbnailItem', () => {
    it('renders thumbnail', () => {
        const onActiveMock = jest.fn();
        const index = 3;
        const thumbnailAlt = 'thumbnail';
        render(
            <CarouselProvider initialState={{ currentIndex: 1, total: 5 }}>
                <ThumbnailItem onActive={onActiveMock} index={index - 1}>
                    <img alt={thumbnailAlt} src="/image.svg" />
                </ThumbnailItem>
            </CarouselProvider>
        );

        expect(screen.getByAltText(thumbnailAlt)).toBeInTheDocument();
    });

    it('updates current index on click', async () => {
        const onActiveMock = jest.fn();
        render(
            <CarouselProvider initialState={{ currentIndex: 3, total: 5 }}>
                <ThumbnailItem onActive={onActiveMock} index={0}>
                    <img src="/image.svg" />
                </ThumbnailItem>
                <CurrentIndexRenderer />
            </CarouselProvider>
        );

        const button = screen.getByRole('button', { hidden: true });
        expect(screen.getByText('Current index: 3')).toBeInTheDocument();

        userEvent.click(button);
        await waitFor(() => {
            expect(screen.getByText('Current index: 0')).toBeInTheDocument();
        });
    });

    it('updates current index on enter click', async () => {
        const onActiveMock = jest.fn();
        render(
            <CarouselProvider initialState={{ currentIndex: 3, total: 5 }}>
                <ThumbnailItem onActive={onActiveMock} index={0}>
                    <img src="/image.svg" />
                </ThumbnailItem>
                <CurrentIndexRenderer />
            </CarouselProvider>
        );

        const button = screen.getByRole('button', { hidden: true });
        button.focus();
        userEvent.keyboard('{Enter}');

        await waitFor(() => {
            expect(screen.getByText('Current index: 0')).toBeInTheDocument();
        });
    });

    it('calls onActive', async () => {
        const onActiveMock = jest.fn();
        const thumbnailAlt = 'thumbnail';
        render(
            <CarouselProvider initialState={{ currentIndex: 3, total: 5 }}>
                <ThumbnailItem onActive={onActiveMock} index={0}>
                    <img alt={thumbnailAlt} src="/image.svg" />
                </ThumbnailItem>
            </CarouselProvider>
        );

        const button = screen.getByRole('button', { hidden: true });

        userEvent.click(button);
        await waitFor(() => {
            expect(onActiveMock).toBeCalled();
        });
    });
});
