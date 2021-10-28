import React from 'react';

const DoctorTeam = () => {
    return (
        <>
            <h3 className="text-3xl sm:text-5xl font-bold mt-16 text-center">Our Doctors Team</h3>
            <div className="sm:grid grid-cols-3 gap-5 px-4 mt-5">
                <div className="bg-white rounded-md p-3 pt-0 mb-5 sm:mb-0">
                    <img src="https://i.ibb.co/Dfg8gZB/team-member10.png" alt="" />
                    <p className="mt-2 text-center">
                        Dr. Mostofa Md. Ekramul Hasan <br />
                        Dental Department <br />
                        Ibn Sina Diagnostic & Consultation Center, Bogura <br />
                        Hot Line: 10615, +88 09610010615
                    </p>
                </div>
                <div className="bg-white rounded-md p-3 pt-0 mb-5 sm:mb-0">
                    <img src="https://i.ibb.co/SdRdd6p/team-member4.png" alt="" />
                    <p className="mt-2 text-center">
                        Dr. Md. Matiur Rahman <br />
                        Orthopedics <br />
                        Ibn Sina Diagnostic & Consultation Center, uttara <br />
                        Hot Line: 10615, +88 09610010615
                    </p>
                </div>
                <div className="bg-white rounded-md p-3 pt-0 mb-5 sm:mb-0">
                    <img src="https://i.ibb.co/vshBwHn/team-member5.png" alt="" />
                    <p className="mt-2 text-center">
                        Professor Dr. Jahanara Rahman <br />
                        Gynecology & Obstetrics <br />
                        Ibn Sina D.Lab & Consultation Center, Doyagonj <br />
                        Hot Line: 10615, +88 09610010615
                    </p>
                </div>
            </div>
        </>
    );
};

export default DoctorTeam;