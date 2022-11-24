import { describe, test, expect, beforeEach, vi } from 'vitest';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('<LoginPage />', () => {
    beforeEach(cleanup);

    const user = {
        id: 123,
        name: 'Edwin Cardenas',
        email: 'eacardenase@gmail.com',
    };

    test('should show component without user', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        // screen.debug();

        const preTag = screen.getByLabelText('pre');

        expect(preTag.textContent).toBe('null');
    });

    test('should call setUser when button is clicked', () => {
        const setUser = vi.fn();

        render(
            <UserContext.Provider value={{ user, setUser }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const setUserButton = screen.getByRole('button', { name: 'Set user' });

        fireEvent.click(setUserButton);

        // screen.debug();

        expect(setUser).toBeCalled();
        expect(setUser).toBeCalledWith(user);
    });
});
