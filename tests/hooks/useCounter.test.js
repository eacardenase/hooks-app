import { describe, test, expect } from 'vitest';

import { act, renderHook } from '@testing-library/react';

import { useCounter } from '../../src/hooks';

describe('useCounter test', () => {
    test('should return default values', () => {
        const initialValue = 10;

        const { result } = renderHook(() => useCounter());
        const { counter, decreaseValue, incrementValue, resetValue } =
            result.current;

        expect(counter).toBe(initialValue);
        expect(decreaseValue).toEqual(expect.any(Function));
        expect(incrementValue).toEqual(expect.any(Function));
        expect(resetValue).toEqual(expect.any(Function));
    });

    test('should generate a value of 100', () => {
        const initialValue = 100;

        const { result } = renderHook(() => useCounter(initialValue));
        const { counter } = result.current;

        expect(counter).toBe(initialValue);
    });

    test('should increase counter value', () => {
        const initialValue = 10;

        const { result } = renderHook(() => useCounter(initialValue));
        const { incrementValue } = result.current;

        act(() => {
            incrementValue();
            incrementValue(2);
        });

        expect(result.current.counter).toBe(initialValue + 3);
    });

    test('should decrement counter value', () => {
        const initialValue = 20;

        const { result } = renderHook(() => useCounter(initialValue));
        const { decreaseValue } = result.current;

        act(() => {
            decreaseValue();
            decreaseValue(2);
        });

        expect(result.current.counter).toBe(initialValue - 3);
    });

    test('should reset counter value', () => {
        const initialValue = 20;

        const { result } = renderHook(() => useCounter(initialValue));
        const { resetValue, incrementValue } = result.current;

        act(() => {
            incrementValue(10);
            resetValue();
        });

        expect(result.current.counter).toBe(initialValue);
    });
});
