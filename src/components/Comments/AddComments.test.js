import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import AddComment from './AddComment';

describe('AddComments component', () => {
    test('render "Add Comment" as a text', () => {
        render(<AddComment />);

        const titleElement = screen.getByText('Add Comment');
        expect(titleElement).toBeInTheDocument();
    });
});
