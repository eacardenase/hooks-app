import { useCallback, useEffect, useReducer, useState } from 'react';

import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const useTodo = ({ initialState = [] }) => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = useCallback((todo) => {
        const action = { type: '[TODO] Add Todo', payload: todo };

        dispatch(action);
    }, []);

    const handleRemoveTodo = useCallback((id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id,
        };

        dispatch(action);
    }, []);

    const handleToggleTodo = useCallback((id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id,
        };

        dispatch(action);
    }, []);

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter((todo) => !todo.done).length,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo,
    };
};
