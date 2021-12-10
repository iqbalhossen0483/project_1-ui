import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAlert } from 'react-alert';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import useAuth from './Hooks/useAuth';

const MyAccount = () => {
    const [appointment, setApointment] = useState([]);
    const { user } = useAuth();
    const alert = useAlert();
    useEffect(() => {
        fetch(`https://islamia-hospital.herokuapp.com/appointment/${user.email}`)
            .then(res => res.json())
            .then(data => setApointment(data))
    }, [user]);

    const handleDelete = id => {
        const confirm = window.confirm("Are you sure to cencel?");
        if (confirm) {
            fetch(`https://islamia-hospital.herokuapp.com/appointment/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert.show("Your appoinment Canceled");
                        const remain = appointment.filter(app => app._id !== id);
                        setApointment(remain);
                    }
                })
        }
    }
    return (
        <>
            <div className='bg-primary'>
                <Header />
            </div>
            <div className='h-full flex flex-col justify-between'>
                <div className='text-center'>
                    <p className='text-2xl py-5'>Welcome! <span className='font-semibold'>{user.displayName}</span></p>
                    <div>
                        <p className='text-xl my-4 underline'>Your All Appointment</p>
                        {!appointment.length > 0 ?
                            <div className='text-xl py-10 text-gray-500'>
                                <p>You have no appoinment</p>
                            </div>
                            :
                            <div className='border rounded-md w-5/6 mx-auto'>
                                <div className='grid grid-cols-5 border-b py-2'>
                                    <p>Patient name</p>
                                    <p>Doctor name</p>
                                    <p>Department name</p>
                                    <p>Visit Date</p>
                                    <p></p>
                                </div>
                                {
                                    appointment.map(data => <div
                                        key={data._id}
                                        className='grid grid-cols-5 py-2 border-b'>
                                        <p>{data.name}</p>
                                        <p>{data.doctor}</p>
                                        <p>{data.department}</p>
                                        <p>{data.date}</p>
                                        <div className='flex justify-around'>
                                            <p className='text-green-500'>{data?.status}</p>
                                            <button
                                                onClick={() => { handleDelete(data._id) }}
                                                className='bg-primary rounded-lg py-1 px-3 text-white'>Cencel</button>
                                        </div>
                                    </div>)
                                }
                            </div>}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default MyAccount;