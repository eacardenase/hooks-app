import PropTypes from 'prop-types';

import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, handleRemoveTodo, handleToggleTodo }) => {
    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleRemoveTodo={handleRemoveTodo}
                    handleToggleTodo={handleToggleTodo}
                />
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleRemoveTodo: PropTypes.func.isRequired,
};
