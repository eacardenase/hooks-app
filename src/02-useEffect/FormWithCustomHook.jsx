import { useEffect } from 'react';

import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
    const { formState, username, email, password, handleInputChange } = useForm(
        {
            username: '',
            email: '',
            password: '',
        }
    );

    return (
        <>
            <h1>Form with custom hook</h1>
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
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
            />
        </>
    );
};
