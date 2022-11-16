import PropTypes from 'prop-types';

export const Quote = ({ author, quote }) => {
    return (
        <>
            <blockquote className="blockquote text-end">
                <p className="mb-1">{quote}</p>
                <footer className="blockquote-footer mt-1">{author}</footer>
            </blockquote>
        </>
    );
};

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};
