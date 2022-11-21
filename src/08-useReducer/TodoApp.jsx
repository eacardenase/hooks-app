import { useTodo } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {
    const {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo,
    } = useTodo([]);

    return (
        <>
            <h1>
                TodoApp: {todosCount},
                <small>
                    pendientes:
                    {pendingTodosCount}
                </small>
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
