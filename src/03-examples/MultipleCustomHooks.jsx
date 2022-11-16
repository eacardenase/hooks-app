import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';

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
                <div className="alert alert-info text-center">Loading...</div>
            ) : (
                <blockquote className="blockquote text-end">
                    <p className="mb-1">{quote}</p>
                    <footer className="blockquote-footer mt-1">{author}</footer>
                </blockquote>
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
