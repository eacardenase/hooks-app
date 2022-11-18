import React from 'react';

import PropTypes from 'prop-types';

export const ShowIncrement = React.memo(({ increment }) => {
    console.log('Me volvi a generar :c');

    return (
        <button className="btn btn-primary" onClick={() => increment(5)}>
            Increment
        </button>
    );
});

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired,
};
