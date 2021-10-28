import { useEffect } from 'react';
import { useState } from 'react';

const useData = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch("/FackDb.json")
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    return services;
};

export default useData;