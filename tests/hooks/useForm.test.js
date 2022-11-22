import { describe, test, expect } from 'vitest';

import { act, renderHook } from '@testing-library/react';

import { useForm } from '../../src/hooks';

describe('useForm tests', () => {
    const initialForm = {
        name: 'Edwin',
        email: 'eacardenase@gmail.com',
    };

    test('should return default values', () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            handleInputChange: expect.any(Function),
            handleFormReset: expect.any(Function),
        });
    });

    test('should change form name value', () => {
        const testInput = {
            target: {
                name: 'email',
                value: 'eacardenase@unal.edu.co',
            },
        };

        const { result } = renderHook(() => useForm(initialForm));
        const { handleInputChange } = result.current;

        act(() => handleInputChange(testInput));

        expect(result.current.email).toBe(testInput.target.value);
        expect(result.current.formState.email).toBe(testInput.target.value);
    });

    test('should reset form values', () => {
        const newValue = 'eacardenase@unal.edu.co';

        const { result } = renderHook(() => useForm(initialForm));
        const { handleInputChange, handleFormReset } = result.current;

        act(() => {
            handleInputChange({ target: { name: 'email', value: newValue } });
            handleFormReset();
        });

        expect(result.current.formState).toEqual(initialForm);
    });
});
