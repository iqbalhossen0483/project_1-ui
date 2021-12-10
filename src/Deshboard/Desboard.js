import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import DesboardMenu from './DeshboardMenu';

const Desboard = () => {
    return (
        <>
            <div className='bg-primary sticky top-0'>
                <Header />
            </div>
            <div className='bg-blue-500 w-64 h-full fixed'>
                <DesboardMenu />
            </div>
            <div className="grid grid-cols-5">
                <p></p>
                <div className='col-span-4 flex flex-col justify-between'>
                    <div className='p-10'>
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Desboard;