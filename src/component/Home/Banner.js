import React from 'react';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import useTailwind from '../Hooks/useTailwind';

const Banner = () => {
    const { register, handleSubmit } = useForm();
    const { input } = useTailwind();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className="grid grid-cols-4 z-0">
                <div className="absolute top-0 w-full z-20">
                    <Header />
                </div>
                <div style={{
                    backgroundImage: "url('https://i.ibb.co/59vWxHq/bg.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",

                }}
                    className="bg-gray-50 text-center col-span-3 relative">
                    <div className="grid grid-cols-3">
                        <div className="py-44 col-span-2 px-10">
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
                <div className="h-full bg-gray-500">

                </div>

                <div className="absolute top-24 right-36">
                    <img style={{ width: "30rem" }} src="https://i.ibb.co/YdmSTG9/chair.png" alt="" />
                </div>
            </div>

            <div style={{ top: "30rem" }}
                className="grid grid-cols-4 w-5/6 border items-center bg-white absolute left-24 ">
                <div className="py-16 bg-primary text-2xl text-center font-semibold">
                    <i className="fas fa-calendar-check text-gray-100 text-3xl"></i>
                    <p>Make an Appointment</p>
                </div>
                <div className="col-span-3 px-10">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="grid grid-cols-3 gap-5">
                        <div>
                            <input className={input + " w-full"} {...register("name", { required: true })} placeholder="Your name" />
                            <select className={input + " w-full"} {...register("doctor", { required: true })}>
                                <option value="null">Select Doctor</option>
                                <option value="Alexendor">Alexendor</option>
                                <option value="Rofoqul Islam">Rofoqul Islam</option>
                                <option value="Habibullah Kayser">Habibullah Kayser</option>
                            </select>
                        </div>
                        <div>
                            <select className={input + " w-full"} {...register("department", { required: true })}>
                                <option value="null">Select Department</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Palmonology">Palmonology</option>
                                <option value="Gynecologyi">Gynecologyi</option>
                                <option value="Neurology">Neurology</option>
                            </select>
                            <input className={input + " w-full"} type="date" {...register("date", { required: true })} placeholder="Pick a Date" />
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="button h-24" type="submit">
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