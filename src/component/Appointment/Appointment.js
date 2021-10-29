import React from 'react';

const Appointment = () => {
    return (
        <div className="my-20 overflow-hidden mx-5 md:w-2/4 md:mx-auto lg:w-4/12 xl:w-1/4">
            <h3 className="text-3xl font-semibold text-center mb-3">Book an appointment</h3>
            <div
                className="w-full py-10 flex flex-col justify-center"
                style={{
                    backgroundImage: 'URL("https://i.ibb.co/4VYh4Cz/05-min.png")'
                }}>
                <form>
                    <input className="block ml-4 mt-4 py-2 px-4 rounded focus:outline-none" type="text" placeholder="Enter your full name" />
                    <input className="block ml-4 mt-4 py-2 px-4 rounded focus:outline-none" type="number" placeholder="Phone number" />
                    <input className="block ml-4 mt-4 py-2 px-4 rounded focus:outline-none" type="email" placeholder="Email address" />
                    <input className="block ml-4 mt-4 py-2 px-4 rounded focus:outline-none" type="date" placeholder="dd/mm/yy" />
                    <input className="block ml-4 mt-4 py-2 px-4 rounded" type="submit" value="submit" />
                </form>
            </div>
        </div>
    );
};

export default Appointment;