import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import googleImg from "../../images/google.png"
import useAuth from '../Hooks/useAuth';
import useTailwind from '../Hooks/useTailwind';

const SignUp = () => {
    const [error, setError] = useState("");
    const [disable, setDisable] = useState(false);
    const { register, handleSubmit } = useForm();
    const { input } = useTailwind();
    const { signInWithGoogle, signUpWithEmail, setIsLoad, updatUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const url = location.state?.from.pathname;


    const signUpEmail = (email, password, name) => {
        setDisable(true);
        signUpWithEmail(email, password, name)
            .then(result => {
                updatUser(name)
                setError('')
                navigate(url || "/home")
                setDisable(false);
            })
            .catch(error => {
                setError(error.message);
                setDisable(false);
            })
            .finally(() => {
                setIsLoad(false)
            })
    }

    const onSubmit = data => {
        let name = "";

        if (data.password !== data.re_password) {
            return setError("Your password should be match above")
        }
        if (data.password.length < 6) {
            return setError("Your password must be 6 character or above")
        }

        setError("")
        name = data.firstName + " " + data.lastName;
        data.name = name;
        signUpEmail(data.email, data.password, data.name);
    };

    //redirect user
    const signInGoogle = () => {
        signInWithGoogle()
            .then(result => {
                setError('')
                navigate(url || "/home")
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoad(false)
            })
    }
    return (
        <div className="mx-5 border bg-white py-6 rounded-md my-16 md:w-2/4 md:mx-auto lg:w-4/12 xl:w-1/4">
            <h1 className="text-2xl text-center font-semibold my-3">Please Sign Up</h1>
            <div className="px-2 md:px-4">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-2 gap-y-2 items-center">
                    <p>First name:</p>

                    <input
                        className={input + " w-full"}
                        {...register("firstName", { required: true })}
                        placeholder="Enter your first name"
                    />
                    <p>Last name:</p>
                    <input
                        className={input + " w-full"}
                        {...register("lastName", { required: true })}
                        placeholder="Enter your last name"
                    />
                    <p>Email:</p>
                    <input
                        className={input + " w-full"}
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Enter your email"
                    />
                    <p>Password:</p>
                    <input
                        className={input + " w-full"}
                        type="password"
                        {...register("password", { required: true })}
                        placeholder="Give a password"
                    />
                    <p>Re-type password:</p>
                    <input
                        className={input + " w-full"}
                        type="password"
                        {...register("re_password", { required: true })}
                        placeholder="Re-enter the password"
                    />
                    <p className="text-red-600 text-center col-span-2">{error}</p>
                    <button
                        disabled={disable}
                        className="col-span-2 rounded px-2 py-px w-2/4 block mx-auto my-3 bg-primary text-white font-semibold"
                        type="submit">
                        sign up
                    </button>
                </form>
            </div>

            <div className="mt-3 mb-3">
                <p className="text-xl text-center font-semibold">Or Sign up with</p>
                <div onClick={signInGoogle}
                    className="border w-12 rounded my-2 mx-auto">
                    <img className="w-full" src={googleImg} alt="" />
                </div>
            </div>
            <p className="text-center">Already have a account? <Link
                to="/log-in"
                className="text-blue-500 hover:underline"
            >Please Log-In</Link></p>
        </div>
    );
};

export default SignUp;