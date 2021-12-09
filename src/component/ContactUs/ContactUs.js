import React from 'react';

const ContactUs = () => {
    return (
        <div className="w-96 mx-auto border bg-white rounded-md my-24 py-7 px-4">
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
                    cols="30"
                    rows="5"
                />
            </form>
        </div>
    );
};

export default ContactUs;