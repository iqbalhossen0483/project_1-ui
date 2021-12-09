import React from 'react';

const SingleDoctor = (props) => {
    const { name, img, department, address, phone } = props.doctor;
    return (
        <div className="bg-white rounded-md shadow-lg p-3 pt-0 mb-5 sm:mb-0">
            <img src={img} alt="" />
            <p className="mt-2 text-center">
                {name} <br />
                {department} <br />
                {address} <br />
                Hot Line: 10615, {phone}
            </p>
        </div>
    );
};

export default SingleDoctor;