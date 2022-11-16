import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
    });

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,
        });

        try {
            const response = await fetch(url);
            const data = await response.json();

            setState({
                data,
                isLoading: false,
                hasError: false,
            });
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
            });
        }
    };

    useEffect(() => {
        getFetch();
    }, [url]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
};
