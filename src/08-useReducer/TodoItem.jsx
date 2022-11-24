import PropTypes from 'prop-types';

export const TodoItem = ({ todo, handleRemoveTodo, handleToggleTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                className={`align-self-center ${
                    todo.done ? 'text-decoration-line-through fst-italic' : ''
                }`}
                onClick={() => handleToggleTodo(todo.id)}
                aria-label="todo-description"
            >
                {todo.description}
            </span>

            <button
                className="btn btn-danger"
                onClick={() => handleRemoveTodo(todo.id)}
            >
                Borrar
            </button>
        </li>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    handleRemoveTodo: PropTypes.func.isRequired,
    handleToggleTodo: PropTypes.func.isRequired,
};
