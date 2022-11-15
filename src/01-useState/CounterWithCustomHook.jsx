import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
    const { counter, incrementValue, decreaseValue, resetValue } = useCounter();

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() => incrementValue(2)}
            >
                +1
            </button>
            <button className="btn btn-primary" onClick={resetValue}>
                Reset
            </button>
            <button
                className="btn btn-primary"
                onClick={() => decreaseValue(2)}
            >
                -1
            </button>
        </>
    );
};
