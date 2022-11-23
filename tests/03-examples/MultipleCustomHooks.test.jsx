import { describe, test, expect, beforeEach, vi } from 'vitest';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

vi.mock('../../src/hooks/useFetch');
vi.mock('../../src/hooks/useCounter');

describe('<MultipleCustomHooks />', () => {
    beforeEach(() => {
        cleanup();

        useCounter.mockReturnValue({
            counter: 0,
            incrementValue: vi.fn(),
        });
    });

    test('should match snapshot', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false,
        });

        const { container } = render(<MultipleCustomHooks />);

        expect(container).toMatchSnapshot();
    });

    test('should show default component', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false,
        });

        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Next quote' });

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quotes'));
        expect(nextButton).toBeDefined();
        expect(nextButton.disabled).toBeTruthy();
    });

    test('should show a quote', () => {
        useFetch.mockReturnValue({
            data: [
                {
                    author: 'Edwin',
                    quote: 'Testing on React is cool',
                },
            ],
            isLoading: false,
            hasError: false,
        });

        render(<MultipleCustomHooks />);

        // screen.debug();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });

        expect(screen.getByText('Edwin')).toBeDefined();
        expect(screen.getByText('Testing on React is cool')).toBeDefined();
        expect(nextButton.disabled).toBeFalsy();
    });

    test('should call increment function', () => {
        useFetch.mockReturnValue({
            data: [
                {
                    author: 'Edwin',
                    quote: 'Testing on React is cool',
                },
            ],
            isLoading: false,
            hasError: false,
        });

        const { incrementValue, counter } = useCounter();

        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);

        expect(incrementValue).toBeCalled();
    });
});
