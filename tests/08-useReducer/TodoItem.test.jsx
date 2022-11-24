import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { describe, test, expect, vi, beforeEach } from 'vitest';

import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('<TodoItem />', () => {
    const todo = {
        id: 1,
        description: 'Soul stone',
        done: false,
    };

    const handleRemoveTodoMock = vi.fn();
    const handleToggleTodoMock = vi.fn();

    beforeEach(() => {
        cleanup();
        vi.clearAllMocks();
    });

    test('should show todo description', () => {
        render(
            <TodoItem
                todo={todo}
                handleRemoveTodo={handleRemoveTodoMock}
                handleToggleTodo={handleToggleTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('todo-description');

        expect(spanElement.textContent).toBe(todo.description);
    });

    test('should show pending Todo', () => {
        render(
            <TodoItem
                todo={todo}
                handleRemoveTodo={handleRemoveTodoMock}
                handleToggleTodo={handleToggleTodoMock}
            />
        );

        // screen.debug();

        const liElement = screen.getByRole('listitem');
        const spanElement = screen.getByLabelText('todo-description');

        expect(liElement.className).toBe(
            'list-group-item d-flex justify-content-between'
        );
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain(
            'text-decoration-line-through fst-italic'
        );
    });

    test('should show completed todo', () => {
        todo.done = true;

        render(
            <TodoItem
                todo={todo}
                handleRemoveTodo={handleRemoveTodoMock}
                handleToggleTodo={handleToggleTodoMock}
            />
        );

        // screen.debug();

        const spanElement = screen.getByLabelText('todo-description');

        expect(spanElement.className).toContain(
            'text-decoration-line-through fst-italic'
        );
    });

    test('should call handleToggleTodo on click on span element', () => {
        render(
            <TodoItem
                todo={todo}
                handleRemoveTodo={handleRemoveTodoMock}
                handleToggleTodo={handleToggleTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('todo-description');

        fireEvent.click(spanElement);

        expect(handleToggleTodoMock).toBeCalled();
        expect(handleToggleTodoMock).toBeCalledWith(todo.id);
    });

    test('should show Borrar button', () => {
        render(
            <TodoItem
                todo={todo}
                handleRemoveTodo={handleRemoveTodoMock}
                handleToggleTodo={handleToggleTodoMock}
            />
        );

        const deleteButton = screen.getByRole('button', { name: 'Borrar' });

        expect(deleteButton).toBeDefined();
        expect(deleteButton.className).toContain('btn-danger');
    });

    test('should call handleRemoveTodo when button is clicked', () => {
        render(
            <TodoItem
                todo={todo}
                handleRemoveTodo={handleRemoveTodoMock}
                handleToggleTodo={handleToggleTodoMock}
            />
        );

        const deleteButton = screen.getByRole('button', { name: 'Borrar' });

        fireEvent.click(deleteButton);

        expect(handleRemoveTodoMock).toBeCalled();
        expect(handleRemoveTodoMock).toBeCalledWith(todo.id);
    });
});
