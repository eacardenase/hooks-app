import { useEffect, useState } from 'react';

export const Message = () => {
    const [coords, setCoords] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const handleMouseMove = ({ x, y }) => {
            const coords = {
                x,
                y,
            };

            setCoords(coords);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    );
};
