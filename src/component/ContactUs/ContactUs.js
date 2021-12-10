import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ContactUs = () => {
    return (
        <>
            <div className='bg-primary'>
                <Header />
            </div>
            <div className="w-full md:w-96 mx-auto md:border rounded-md my-24 py-7 px-4">
                <form className="flex flex-col">
                    <p>Your topic name:  <input
                        className="border rounded focus:outline-none px-4 py-1 mb-2"
                        type="text"
                        placeholder="Enter your topic name"
                    />
                    </p>
                    <p className="mb-1">Your massege: </p>
                    <textarea
                        className="border rounded focus:outline-none px-4 py-1"
                        name="massege"
                        rows="5"
                    />
                </form>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;