import { render, screen } from '@testing-library/react'
import ToDo from '../components/ToDo';

test('Renders content', () => {
    render(<ToDo content='test' />);

    const todo = screen.getByTestId('ToDo');

    expect(todo.innerHTML).toBe('test');
});
