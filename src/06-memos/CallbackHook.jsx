import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(0);

    const incrementValue = useCallback((stepValue = 1) => {
        setCounter((counterValue) => counterValue + stepValue);
    }, []);

    // useEffect(() => {
    //     incrementValue();
    // }, [incrementValue]);

    // const incrementValue = () => {
    //     setCounter(counter + 1);
    // };

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementValue} />
        </>
    );
};
