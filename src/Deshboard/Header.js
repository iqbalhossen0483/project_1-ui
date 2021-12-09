import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="h-full text-xl p-5">
            <div>
                <Link to="/desboard/service" className="hover:underline block">
                    Service
                </Link>
                <Link to="/desboard/doctor" className="hover:underline block">
                    Doctor
                </Link>
                <Link to="/desboard/gallery" className="hover:underline block">
                    Gallery
                </Link>
            </div>
        </div>
    );
};

export default Header;