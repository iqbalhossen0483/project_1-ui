import React from 'react';
import useAuth from '../Hooks/useAuth';

const UserInform = ({ logOut }) => {
    const { user } = useAuth();
    console.log(user)
    return (
        <div
            className="h-60 w-64 absolute top-20 md:top-14 right-8 shadow-md bg-white rounded px-5 py-7 text-center">
            {user.photoURL ?
                <img className="mx-auto h-20 w-20 rounded-full" src={user.photoURL} alt="" /> :
                <i
                    className="fas fa-user text-2xl ml-3 hidden md:block">
                </i>
            }
            <p className="text-xl mt-2">{user.displayName}</p>
            <p>{user.email}</p>
            <button
                className="border rounded py-1 px-3 text-base bg-blue-600 text-white mt-3"
                onClick={logOut}>
                Sign Out
            </button>
        </div>
    );
};

export default UserInform;