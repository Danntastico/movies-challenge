import { useState, useEffect } from 'react';

export const useFetch = (apiService: () => any) => {
    const [state, setState] = useState({
    data: null,
    loading: true,
    });

    useEffect(() => {
        async function asyncPetition() {
            const response = await apiService();
            setState({
                data: response,
                loading: false,
            })
        }
        asyncPetition();
    }, [apiService]);

    return state;
};
