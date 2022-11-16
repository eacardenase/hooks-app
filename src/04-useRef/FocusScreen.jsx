import { useRef } from 'react';

export const FocusScreen = () => {
    const inputOneRef = useRef();
    const inputTwoRef = useRef();

    const handleInput1Click = () => {
        // document.querySelector('input').focus();
        inputOneRef.current.focus();
    };

    const handleInput2Click = () => {
        // document.querySelector('input').focus(); // wonk work since it will point to input 1
        inputTwoRef.current.focus();
    };

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                type="text"
                placeholder="Input 1"
                className="form-control mb-2"
                ref={inputOneRef}
            />
            <input
                type="text"
                placeholder="Input 2"
                className="form-control mb-2"
                ref={inputTwoRef}
            />

            <button className="btn btn-primary " onClick={handleInput1Click}>
                Focus Input 1
            </button>
            <button className="btn btn-primary " onClick={handleInput2Click}>
                Focus Input 2
            </button>
        </>
    );
};
