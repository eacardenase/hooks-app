import { describe, test, expect, vi, beforeEach } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';

import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('<HomePage />', () => {
    beforeEach(cleanup);

    const user = {
        id: 1,
        name: 'Edwin',
    };

    test('should show component without user', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        // screen.debug();

        const preTag = screen.getByLabelText('pre');

        expect(preTag.textContent).toBe('null');
    });

    test('should show component with user', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        // screen.debug();

        const preTag = screen.getByLabelText('pre');

        expect(preTag.textContent).toContain(JSON.stringify(user, null, 3));
    });
});
