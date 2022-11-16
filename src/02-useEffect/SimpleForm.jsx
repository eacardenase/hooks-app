import { useEffect, useState } from 'react';

import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'eacardenase',
        email: 'eacardenase@gmail.com',
    });

    const { username, email } = formState;

    const handleInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    useEffect(() => {
        // console.log('useEffect called!');
    }, []);

    useEffect(() => {
        // console.log('formState changed!');
    }, [formState]);

    useEffect(() => {
        // console.log('Email changed!');
    }, [email]);

    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <input
                type="text"
                className="form-control mt-2"
                placeholder="User name"
                name="username"
                value={username}
                onChange={handleInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="example@example.com"
                name="email"
                value={email}
                onChange={handleInputChange}
            />

            {username === 'eacardenase2' && <Message />}
        </>
    );
};
