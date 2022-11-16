import { useLayoutEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';

export const Quote = ({ author, quote }) => {
    const quoteRef = useRef();
    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0,
    });

    useLayoutEffect(() => {
        const { width, height } = quoteRef.current.getBoundingClientRect();

        setBoxSize({
            width,
            height,
        });
    }, [quote]);

    return (
        <>
            <blockquote
                className="blockquote text-end"
                // style={{
                //     display: 'flex',
                // }}
            >
                <p className="mb-1" ref={quoteRef}>
                    {quote}
                </p>
                <footer className="blockquote-footer mt-1">{author}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
            <hr />
        </>
    );
};

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};
