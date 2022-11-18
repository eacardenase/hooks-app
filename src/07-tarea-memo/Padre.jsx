import { useCallback, useState } from 'react';

import { Hijo } from './Hijo';

export const Padre = () => {
    const [valor, setValor] = useState(0);
    const numeros = [2, 4, 6, 8, 10];

    const incrementar = useCallback(
        (num) => setValor((valor) => valor + num),
        []
    );

    return (
        <div>
            <h1>Padre</h1>
            <p>Total: {valor}</p>

            <hr />

            {numeros.map((n) => {
                return <Hijo numero={n} incrementar={incrementar} key={n} />;
            })}
        </div>
    );
};
