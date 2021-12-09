import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import UserInform from './UserInform';

const Header = () => {
    const [showInfom, setShowInfom] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
    const { user, logOut } = useAuth();

    const showAndHideUder = () => {
        if (!showInfom) {
            setShowInfom(true)
        }
        else {
            setShowInfom(false)
        }
    }

    //log out for user information page
    const LogOut = () => {
        logOut();
        setShowInfom(false)
    }

    //show menu on mobile onclick
    const showMenuOnMobile = () => {
        if (!showMenu) {
            setShowMenu(true)
        }
        else {
            setShowMenu(false)
        }
    }
    return (
        <div className="md:h-14 md:px-5 flex justify-between items-center relative">
            <div className="flex justify-start pl-5">
                <Link to="/home" className="text-2xl font-bold cursor-pointer font-serif">Islamia Hospital</Link>
            </div>

            {/* for mobile view */}
            <div className="flex justify-between items-center pb-2 text-2xl md:hidden">
                <i
                    onClick={showMenuOnMobile}
                    className="fas fa-bars"></i>
                {user.email && user.photoURL && < img
                    onClick={showAndHideUder}
                    className="h-10 w-10 rounded-full ml-3"
                    src={user.photoURL}
                    alt="" />}
            </div>

            {/* for tablet and above */}
            {showMenu &&
                <div
                    className="text-lg flex flex-col items-start pb-2 font-semibold md:pb-0 md:flex-row md:items-center md:justify-end lg:text-xl">
                    <Link
                        className="hover:underline mr-4" to="/home">
                        Home
                    </Link>
                    <p>About us</p>
                    <p className="ml-4">Doctors</p>
                    <Link
                        className="md:ml-4 hover:underline" to="/contact-us">
                        Contact us
                    </Link>
                    {/* log in */}
                    {!user.email &&
                        <Link
                            className="md:ml-4 hover:underline" to="/log-in">
                            Log-In
                        </Link>
                    }
                    {/* user img */}
                    {user.email && user.photoURL && < img
                        onClick={showAndHideUder}
                        className="h-10 w-10 rounded-full ml-3 hidden md:block"
                        src={user.photoURL}
                        alt="" />
                    }

                    {user.email && !user.photoURL &&
                        <i
                            onClick={showAndHideUder}
                            className="fas fa-user text-2xl text-gray-50 ml-3 hidden md:block">
                        </i>
                    }

                    {!user.email && <Link
                        className="md:ml-4 hover:underline" to="/sign-up">
                        Sign-Up
                    </Link>}
                </div>
            }
            {showInfom && <UserInform logOut={LogOut} />}
        </div>
    );
};

export default Header;