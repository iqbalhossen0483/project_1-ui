import React from 'react';

const Footer = () => {
    return (
        <div className="bg-blue-600 sm:grid grid-cols-3 gap-3 py-4 pb-4 px-6 mt-10 text-xl">
            <div>
                <p>
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    House # 48, Road # 9/A, Dhanmondi, Dhaka 1209
                </p>
                <p>
                    <i className="fas fa-phone mr-2"></i>
                    Hotline: 10615, +88 09610010615
                </p>
            </div>
            <div className="my-5 sm:my-0">
                <p>Menus</p>
                <p>take-a-appointment</p>
                <p>contact us</p>
                <p>about us</p>
            </div>
            <div>
                <p>Get in tuch</p>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter ml-4"></i>
            </div>
            <div className="col-span-3 text-center mt-4 sm:mt-0">
                <i className="far fa-copyright mr-2"></i>All right reserve by Md Rakib
            </div>
        </div>
    );
};

export default Footer;