import React from 'react';
import { useHistory } from 'react-router';

const Service = (props) => {
    const history = useHistory();
    const { _id, name, img, sortDescription } = props.service;

    const goSingleService = id => {
        history.push("/service/" + id)
    }
    return (
        <div className="mb-5 sm:mb-0 md:grid grid-cols-2 gap-3 bg-white rounded-md border">
            <div>
                <img className="h-full object-cover rounded-l mb-2 md:mb-0 sm:h-72 xl:h-full" src={img} alt="" />
            </div>
            <div className='flex flex-col justify-between px-2 py-5'>
                <div>
                    <h3 className="text-2xl font-semibold font-serif">{name}</h3>
                    <p className='text-justify mt-3'>{sortDescription.length > 200 ? sortDescription.slice(0, 200) + "..." : sortDescription}</p>
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={() => goSingleService(_id)}
                        className="border rounded-lg px-4 py-1 bg-primary text-white lg:text-xl font-semibold mt-2">
                        View details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service;