import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleNewTodo }) => {
    const { description, handleInputChange, handleFormReset } = useForm({
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.length < 2) {
            return;
        }

        const newTodo = { id: new Date().getTime(), description, done: false };

        handleNewTodo(newTodo);
        handleFormReset();
    };

    return (
        <form onSubmit={handleSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Que debo hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </form>
    );
};

TodoAdd.propTypes = {
    handleNewTodo: PropTypes.func.isRequired,
};
