'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = <T,>(url: string): { data: T | null; isLoading: boolean; error: string | null } => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);  // Set loading to true before fetching data
            try {
                const res = await axios.get(url);
                if (res.status === 200) {
                    setData(res.data);  // Set data from the response
                } else {
                    setError('Failed to fetch data');  // Handle non-200 responses
                }
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);  // Catch and set error message if it's an instance of Error
                } else {
                    setError('An unknown error occurred');  // Fallback for non-Error objects
                }
            } finally {
                setIsLoading(false);  // Set loading to false once done
            }
        };

        fetchData();
    }, [url]);  // Add dependency array with the URL

    return { data, isLoading, error };  // Return all states
};
