import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import useData from '../Hooks/useData';
import SingleService from './SingleService';

const ServiceDetails = () => {
    const { id } = useParams();
    const services = useData();
    const [service, setService] = useState([]);

    useEffect(() => {
        if (services !== undefined) {
            const singleService = services.find(service => service.id === parseInt(id));
            setService(singleService);
        }
    }, [services, id])
    return (
        <div>
            {service && <SingleService service={service} />}
        </div>
    );
};

export default ServiceDetails;