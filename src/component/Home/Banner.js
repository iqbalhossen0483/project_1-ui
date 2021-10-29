import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../../images/banner.png"

const Banner = () => {
    return (
        <div className="sm:grid grid-cols-2 bg-white sm:pt-10">
            <div className="pt-10 sm:pt-0 text-center flex justify-center items-center">
                <div className="lg:leading-10">
                    <h2 className="text-4xl font-semibold">ISLAMIA HOSPITAL</h2>
                    <p className="text-xl">A Leargest Field Of Caregiver</p>
                    <p
                        className="mt-3 sm:mt-0">
                        We are committed to better service. Take a appointment now
                    </p>
                    <Link to="/appointment">
                        <button
                            className="border rounded-md mt-2 md:mt-3 px-3 py-1 bg-blue-600 text-white font-semibold text-xl">
                            take a appointment
                        </button>
                    </Link>
                </div>
            </div>
            <img className="pt-4 sm:pt-0" src={banner} alt="" />
        </div>
    );
};

export default Banner;