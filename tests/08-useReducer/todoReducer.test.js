import { describe, test, expect, beforeEach } from 'vitest';

import { todoReducer } from '../../src/08-useReducer/todoReducer';

let initialState;

describe('todoReducer', () => {
    beforeEach(() => {
        initialState = [
            {
                id: 1,
                description: 'Demo Todo',
                done: false,
            },
        ];
    });

    test('should return initial state', () => {
        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);
    });

    test('should add a Todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'New Todo',
                done: false,
            },
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('should remove a Todo', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1,
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);
    });

    test('should toggle a Todo', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1,
        };

        const newState = todoReducer(initialState, action);

        expect(newState[0].done).toBe(true);
    });
});
