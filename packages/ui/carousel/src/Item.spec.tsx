import { render, screen } from '@testing-library/react';
import { Item } from './Item';

describe('Item', () => {
    it('renders children', () => {
        render(
            <Item>
                <img src="/hello.png" />
            </Item>
        );

        screen.debug();

        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});
