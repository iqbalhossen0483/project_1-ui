import React, { useEffect, useState } from 'react';
import useData from '../Hooks/useData';
import Banner from './Banner';
import DoctorTeam from './DoctorTeam';
import Service from './Service';

const Home = () => {
    const { services, isLoading } = useData();
    const [gallery, setgallery] = useState([]);
    useEffect(() => {
        fetch("https://islamia-hospital.herokuapp.com/gallery")
            .then(res => res.json())
            .then(data => setgallery(data))
    }, []);
    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <div className="spinner"></div>
            </div>)
    }
    return (
        <div>
            <Banner />
            <div className="mt-36">
                <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-center">Our Services</h2>
                <div className="sm:grid grid-cols-2 gap-4 px-4">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}></Service>)
                    }
                </div>
            </div>
            <DoctorTeam />
            <div className="mt-16 px-4 mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-center">Gallery</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3">
                    {
                        gallery.map(img => <img className="h-full" src={img.img} alt="" />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;