import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import UserInform from './UserInform';

const Header = () => {
    const [showInfom, setShowInfom] = useState(false);
    const { user, logOut } = useAuth();

    const showAndHideUder = () => {
        if (!showInfom) {
            setShowInfom(true)
        }
        else {
            setShowInfom(false)
        }
    }
    return (
        <div className="h-14 bg-blue-600 flex justify-between items-center px-4 relative">
            <div>
                <Link to="/home" className="text-2xl font-sans font-bold text-gray-100 cursor-pointer">Islamia Hospital</Link>
            </div>
            <div className="text-xl font-semibold text-white flex items-center">
                <Link
                    className="hover:underline" to="/home">
                    Home
                </Link>
                <Link
                    className="ml-4 hover:underline" to="/appointment">
                    Take-an-Appointment
                </Link>
                <Link
                    className="ml-4 hover:underline" to="/contact-us">
                    Contact-us
                </Link>
                {/* log in */}
                {!user.email ?
                    <Link
                        className="ml-4 hover:underline" to="/log-in">
                        Log-In
                    </Link>
                    :
                    <button onClick={logOut} className="hover:underline ml-4">Log-Out</button>
                }
                {/* user img */}
                {user.email && user.photoURL && < img
                    onClick={showAndHideUder}
                    className="h-10 w-10 rounded-full ml-3"
                    src={user.photoURL}
                    alt="" />}

                {user.email && !user.photoURL && <i className="fas fa-user text-2xl text-gray-50 ml-3"></i>}
                {!user.email && <Link
                    className="ml-4 hover:underline" to="/sign-up">
                    Sign-Up
                </Link>}
            </div>
            {showInfom && <UserInform />}
        </div>
    );
};

export default Header;