import { useState, useEffect } from 'react';

export type TApiResponse = {
    data: any[];
    error: Boolean;
    isLoading: Boolean;
};

const useFetch = (fetchFunction: Promise<any>): TApiResponse => {
    const [data, setData] = useState<object[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        if (!fetchFunction) {
            return;
        }

        async function fetchData() {
            try {
                setData(await fetchFunction);
            } catch (err) {
                console.log('error', err);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [fetchFunction]);

    return { data, isLoading, error };
};

export { useFetch };
