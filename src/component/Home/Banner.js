import React, { useState } from 'react';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import useTailwind from '../Hooks/useTailwind';
import { useAlert } from 'react-alert';
import useAuth from '../Hooks/useAuth';

const Banner = () => {
    const [disable, setdisable] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const { input } = useTailwind();
    const { user } = useAuth();
    const alert = useAlert()
    const onSubmit = appoitment => {
        setdisable(true);
        if (appoitment.doctor === "null") {
            alert.show("Choose a doctor")
        }
        else if (appoitment.department === "null") {
            alert.show("Choose a department")
        }
        else if (!user.email) {
            alert.show("Please Log in first");
        }
        else {
            appoitment.email = user.email;
            appoitment.status = "pending";
            fetch("https://islamia-hospital.herokuapp.com/appointment", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(appoitment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert.show("Your appointment sent successfully");
                        reset();
                    }
                })
        };
        setdisable(false);
    };

    return (
        <>
            <div className="md:block absolute top-0 w-full z-20">
                <Header />
            </div>
            <div className="grid grid-cols-4 z-0">
                <div style={{
                    backgroundImage: "url('https://i.ibb.co/59vWxHq/bg.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",

                }}
                    className="bg-gray-50 text-center col-span-4 md:col-span-3 relative">
                    <div className="grid grid-cols-3">
                        <div className="py-24 md:py-44 col-span-3 md:col-span-2 px-2 md:px-10">
                            <h1 className="text-4xl font-semibold mb-1">Your new smile start here</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, esse consectetur expedita dignissimos amet officia soluta praesentium temporibus est inventore et delectus ut, molestias asperiores quia voluptate obcaecati quas error.</p>
                            <div className="flex justify-center mt-7">
                                <button className="button">Check more</button>
                                <button className="button ml-3">Find doctors</button>
                            </div>
                        </div>
                        <p></p>
                    </div>
                </div>
                <div className="hidden md:block h-full bg-gray-500">

                </div>

                <div className="hidden md:block absolute top-24 right-36">
                    <img style={{ width: "30rem" }} src="https://i.ibb.co/YdmSTG9/chair.png" alt="" />
                </div>
            </div>

            <div style={{ top: "30rem" }}
                className="flex flex-col md:grid grid-cols-4 w-full md:w-5/6 md:border items-center bg-white absolute md:left-24 ">
                <div className="py-16 w-full bg-primary text-2xl text-center font-semibold">
                    <i className="fas fa-calendar-check text-gray-100 text-3xl"></i>
                    <p>Make an Appointment</p>
                </div>
                <div className="col-span-3 w-full py-4 md:py-0 md:mt-0 px-10">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col md:grid grid-cols-3 gap-5">
                        <div>
                            <input className={input + " w-full mb-2"} {...register("name", { required: true })} placeholder="Patient name" />
                            <select className={input + " w-full"} {...register("doctor", { required: true })}>
                                <option value="null">Select Doctor</option>
                                <option value="Alexendor">Alexendor</option>
                                <option value="Rofoqul Islam">Rofoqul Islam</option>
                                <option value="Habibullah Kayser">Habibullah Kayser</option>
                            </select>
                        </div>
                        <div>
                            <select className={input + " w-full mb-2"} {...register("department", { required: true })}>
                                <option value="null">Select Department</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Palmonology">Palmonology</option>
                                <option value="Gynecologyi">Gynecologyi</option>
                                <option value="Neurology">Neurology</option>
                            </select>
                            <input className={input + " w-full"} type="date" {...register("date", { required: true })} placeholder="Pick a Date" />
                        </div>
                        <div className="flex items-center justify-center">
                            <button disabled={disable} className="button md:h-24" type="submit">
                                <i class="fa fa-paper-plane" aria-hidden="true"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Banner;