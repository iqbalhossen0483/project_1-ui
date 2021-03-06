import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import googleImg from "../../images/google.png"
import useAuth from '../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disable, setDisable] = useState(false);
    const [error, setError] = useState("");
    const { user, signInWithGoogle, logInWithEmail, setIsLoad } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const url = location.state?.from.pathname;

    const getEmail = e => {
        setEmail(e.target.value);
    }
    const getPassword = e => {
        setPassword(e.target.value);
    }

    //redirect user
    const signInGoogle = () => {
        signInWithGoogle()
            .then(result => {
                navigate(url || "/home");
                setError("");
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoad(false)
            })
    }
    const logInEmail = (e, email, password) => {
        setDisable(true);
        console.log("click")
        logInWithEmail(e, email, password)
            .then(result => {
                navigate(url || "/home");
                setError('');
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
    return (
        <div className="mx-5 bg-white border rounded-md py-5 px-3 my-16 overflow-hidden md:w-2/4 md:mx-auto lg:w-4/12">
            <h2 className="text-2xl text-center my-3 font-semibold">Please Log In </h2>
            <form
                onSubmit={(e) => logInEmail(e, email, password)}
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    padding: "30px 15px 0",
                }}>
                <div>
                    <p>Email:</p>
                    <p className="mt-3">Password:</p>
                </div>
                <div>
                    <input
                        onBlur={e => getEmail(e)}
                        className="border rounded px-3"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                    />
                    <input
                        onBlur={e => getPassword(e)}
                        className="border rounded px-3 mt-3"
                        type="password"
                        name="password"
                        placeholder="Enter the password"
                    />
                    {user.email && <span
                        className="my-0 cursor-pointer">
                        Forget password?</span>}
                </div>
                {error &&
                    <p className='text-red-500 col-span-2'>{error}</p>
                }
                <div className="col-span-2 mt-3 justify-center">
                    <button
                        disabled={disable}
                        className="rounded px-2 py-px w-32 block mx-auto my-2 bg-primary text-white font-semibold"
                        type="submit">
                        Log In
                    </button>
                </div>

            </form>
            <div className="mt-3 mb-3">
                <p className="text-xl text-center font-semibold">Or Log In with</p>
                <div
                    onClick={signInGoogle}
                    className="border w-12 rounded my-2 mx-auto">
                    <img className="w-full" src={googleImg} alt="" />
                </div>
            </div>
            <div className="text-center">New to here?
                <Link
                    to="/sign-up"
                    className="text-blue-500 hover:underline">
                    Please Sign-Up
                </Link>
            </div>
        </div>
    );
};

export default LogIn;