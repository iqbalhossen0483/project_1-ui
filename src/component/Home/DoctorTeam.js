import React, { useEffect, useState } from 'react';
import SingleDoctor from './SingleDoctor';

const DoctorTeam = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch("https://islamia-hospital.herokuapp.com/doctors")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="md:px-24">
            <h3 className="text-3xl sm:text-4xl font-bold mt-16 text-center">Our Doctors Team</h3>
            <div className="sm:grid grid-cols-3 gap-5 px-4 mt-5">
                {
                    doctors.map(doctor => <SingleDoctor doctor={doctor}></SingleDoctor>)
                }
            </div>
        </div>
    );
};

export default DoctorTeam;