import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    const incrementValue = (value = 1) =>
        setCounter((currCounter) => currCounter + value);
    const decreaseValue = (value = 1) => {
        if (counter - value < 0 || counter === 0) {
            return;
        }

        setCounter((currCounter) => currCounter - value);
    };
    const resetValue = () => setCounter(initialValue);

    return {
        counter,
        incrementValue,
        decreaseValue,
        resetValue,
    };
};
