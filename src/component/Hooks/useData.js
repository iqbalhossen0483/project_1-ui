import { useEffect } from 'react';
import { useState } from 'react';

const useData = () => {
    const [services, setService] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch("https://enigmatic-wave-77353.herokuapp.com/services")
            .then(res => res.json())
            .then(data => {
                setService(data);
                setIsLoading(false);
            });
    }, []);
    return { services, setService, isLoading };
};

export default useData;