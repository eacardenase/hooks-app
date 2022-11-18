import React from 'react';

import PropTypes from 'prop-types';

export const Hijo = React.memo(({ numero, incrementar }) => {
    console.log('Padre, me acabo de generar :/');

    return (
        <>
            <button
                className="btn btn-primary mr-3"
                onClick={() => incrementar(numero)}
            >
                {numero}
            </button>
        </>
    );
});

Hijo.propTypes = {
    numero: PropTypes.number.isRequired,
    incrementar: PropTypes.func.isRequired,
};
