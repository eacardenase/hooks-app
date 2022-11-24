import { describe, test, expect, beforeEach } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { MainApp } from '../../src/09-useContext/MainApp';

describe('<MainApp />', () => {
    beforeEach(cleanup);

    test('should show <HomePage />', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        // screen.debug();

        expect(screen.getByText('HomePage')).toBeDefined();
    });

    test('should show <LoginPage />', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        screen.debug();

        const loginLink = screen.getByRole('link', { name: 'Login' });

        expect(screen.getByText('LoginPage')).toBeDefined();
        expect(loginLink.className).toContain('active');
    });
});
