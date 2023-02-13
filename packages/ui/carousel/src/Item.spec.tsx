import { Item } from './Item';
import { render, screen } from './testUtils';

describe('Item', () => {
    it('renders children', () => {
        render(
            <Item>
                <img src="/hello.png" />
            </Item>
        );

        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});
