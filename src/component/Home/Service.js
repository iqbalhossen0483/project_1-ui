import React from 'react';
import { useHistory } from 'react-router';

const Service = (props) => {
    const history = useHistory();
    const { _id, name, img, sortDescription } = props.service;

    const goSingleService = id => {
        history.push("/service/" + id)
    }
    return (
        <div className="mb-5 sm:mb-0 xl:grid grid-cols-2 gap-3 bg-white rounded-md p-3">
            <div>
                <img className="h-full object-cover mb-2 xl:mb-0 sm:h-72 xl:h-full" src={img} alt="" />
            </div>
            <div>
                <h3 className="text-2xl font-semibold font-serif">{name}</h3>
                <p className='text-justify mt-3'>{sortDescription}</p>
            </div>
            <div className="col-span-2 flex justify-center">
                <button
                    onClick={() => goSingleService(_id)}
                    className="border rounded-md px-4 py-1 bg-blue-600 text-white lg:text-xl font-semibold mt-2">
                    View details
                </button>
            </div>
        </div>
    );
};

export default Service;