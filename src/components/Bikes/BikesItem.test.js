import { render, screen } from "@testing-library/react";
import BikesItem from './BikesItem';

describe('BikesItem component', () => {
    test('renders bikes if request succeeds', async () => {
        render(<BikesItem />)

        const listItemBikes = await screen.findAllByRole('listitem');
        expect(listItemBikes).not.toHaveLength(0);
    });
});