import React, { memo } from 'react';

import PropTypes from 'prop-types';

export const Small = React.memo(({ value }) => {
    console.log('Me volvi a generar/dibujar');

    return <small>{value}</small>;
});

Small.propTypes = {
    value: PropTypes.number.isRequired,
};
