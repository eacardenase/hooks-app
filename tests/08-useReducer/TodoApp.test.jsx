import { describe, test, expect, vi, beforeEach } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';

import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hooks/useTodo';

vi.mock('../../src/hooks/useTodo');

describe('<TodoApp />', () => {
    beforeEach(() => {
        cleanup();
    });

    useTodo.mockReturnValue({
        todos: [
            {
                id: 1,
                description: 'Todo #1',
                done: false,
            },
            {
                id: 2,
                description: 'Todo #2',
                done: true,
            },
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleNewTodo: vi.fn(),
        handleRemoveTodo: vi.fn(),
        handleToggleTodo: vi.fn(),
    });

    test('should match snapshot', () => {
        const { container } = render(<TodoApp />);

        // screen.debug();

        expect(container).toMatchSnapshot();
    });

    test('should show component correctly', () => {
        render(<TodoApp />);

        expect(screen.getByText('Todo #1')).toBeDefined();
        expect(screen.getByText('Todo #2')).toBeDefined();
        expect(screen.getByRole('textbox')).toBeDefined();
    });
});
