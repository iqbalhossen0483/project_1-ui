import React from 'react';
import useData from '../Hooks/useData';
import Banner from './Banner';
import DoctorTeam from './DoctorTeam';
import Service from './Service';

const Home = () => {
    const services = useData();
    return (
        <div>
            <Banner />
            <div className="mt-12">
                <h2 className="text-3xl sm:text-5xl font-bold mb-5 text-center">Our Services</h2>
                <div className="sm:grid grid-cols-2 gap-4 px-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}></Service>)
                    }
                </div>
            </div>
            <DoctorTeam />
            <div className="mt-16 px-4">
                <h2 className="text-3xl sm:text-5xl font-bold mb-5 text-center">Gallery</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3">
                    <img src="https://i.ibb.co/s37ydPw/01-min.png" alt="" />
                    <img src="https://i.ibb.co/9Hh1qnY/04-min.png" alt="" />
                    <img src="https://i.ibb.co/4VYh4Cz/05-min.png" alt="" />
                    <img src="https://i.ibb.co/G0jqyv1/successful-medical-team-329181-9252-min.jpg" alt="" />
                    <img src="https://i.ibb.co/LYCZkMP/06-min.png" alt="" />
                    <img src="https://i.ibb.co/18nhZYZ/03-min.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;