import { useCallback, useEffect, useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

import { todoReducer } from './todoReducer';

const initialState = [];

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const TodoApp = () => {
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

    return (
        <>
            <h1>
                TodoApp: 10, <small>pendientes: 2</small>
            </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleRemoveTodo={handleRemoveTodo}
                        handleToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    {/* onNewTodo() */}
                    <TodoAdd handleNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    );
};
