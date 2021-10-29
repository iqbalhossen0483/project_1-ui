import React from 'react';
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import googleImg from "../../images/google.png"
import useAuth from '../Hooks/useAuth';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const { signInWithGoogle, signUpWithEmail, setIsLoad, updatUser } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from.pathname;

    const getFname = e => {
        setName(e.target.value)
    }

    const getLname = e => {
        setName(e.target.value)
    }
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(" " + e.target.value)
    }

    //redirect user
    const signInGoogle = () => {
        signInWithGoogle()
            .then(result => {
                history.push(url || "/home")
            })
            .catch(error => {
                console.log(error.message)
            })
            .finally(() => {
                setIsLoad(false)
            })
    }
    const signUpEmail = (e, email, password, name) => {
        signUpWithEmail(e, email, password, name)
            .then(result => {
                updatUser(name)
                history.push(url || "/home")
            })
            .catch(error => {
                console.log(error.message)
            })
            .finally(() => {
                setIsLoad(false)
            })
    }
    return (
        <div className="mx-5 bg-white py-6 rounded-md my-16 overflow-hidden md:w-2/4 md:mx-auto lg:w-4/12 xl:w-1/4">
            <h1 className="text-2xl text-center font-semibold my-3">Please Sign Up</h1>
            <div className="pt-8 px-2 md:px-4">
                <form
                    onSubmit={(e) => signUpEmail(e, email, password, name)}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        padding: "0 10px"
                    }}>
                    <div>
                        <p>First name:</p>
                        <p className="mt-2">Last name:</p>
                        <p className="mt-2">Email:</p>
                        <p className="mt-3">Password:</p>
                    </div>
                    <div>
                        <input
                            onBlur={e => getFname(e)}
                            className="border px-3 rounded focus:outline-none"
                            type="text"
                            placeholder="Enter your first name"
                        />
                        <input
                            onBlur={e => getLname(e)}
                            className="border mt-2 px-3 rounded focus:outline-none"
                            type="text"
                            placeholder="Enter your last name"
                        />
                        <input
                            onBlur={(e) => getEmail(e)}
                            className="border mt-2 px-3 rounded focus:outline-none"
                            type="email" name="email"
                            placeholder="Enter your email"
                            required
                        />
                        <input
                            onBlur={e => getPassword(e)}
                            className="border mt-2 px-3 rounded focus:outline-none"
                            type="password" name="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <input
                        className="col-span-2 rounded px-2 py-px w-2/4 block mx-auto my-3 bg-blue-400 text-white font-semibold"
                        type="submit"
                        value="sign up"
                    />
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