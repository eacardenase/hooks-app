import { useFetch, useCounter } from '../hooks';

import { Quote, LoadingQuote } from './';

export const MultipleCustomHooks = () => {
    const { counter, incrementValue } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`
    );

    const { author, quote } = !!data && data[0];

    // if (isLoading) {
    //     return <div className="alert alert-info text-center">Loading...</div>;
    // }

    return (
        <>
            <h1>Braking Bad Quotes</h1>
            <hr />

            {isLoading ? (
                <LoadingQuote />
            ) : (
                <Quote author={author} quote={quote} />
            )}

            <button
                className="btn btn-primary"
                onClick={() => incrementValue()}
                disabled={isLoading}
            >
                Next quote
            </button>
        </>
    );
};
