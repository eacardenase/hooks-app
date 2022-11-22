import { cleanup, render, screen } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';

describe('<MultipleCustomHooks />', () => {
    beforeEach(cleanup);

    test('should match snapshot', () => {
        const { container } = render(<MultipleCustomHooks />);

        expect(container).toMatchSnapshot();
    });

    test('should show default component', () => {
        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Next quote' });

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quotes'));
        expect(nextButton).toBeDefined();
        expect(nextButton.disabled).toBeTruthy();
    });
});
